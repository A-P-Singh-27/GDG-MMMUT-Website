const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./../Models/User");
const { z } = require("zod");

require("dotenv").config();

exports.signup = async (req, res) => {
    // Define Zod schema
    const schema = z.object({
        firstname: z.string().min(2, "Firstname must be at least 2 characters").max(30, "Firstname cannot exceed 30 characters"),
        lastname: z.string().min(2, "Lastname must be at least 2 characters").max(30, "Lastname cannot exceed 30 characters"),
        email: z.string().email("Invalid email format"),
        password: z.string().min(8, "Password must be at least 8 characters long"),
        confirmPassword: z.string(),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords must match",
        path: ["confirmPassword"], // Assign error to confirmPassword
    });

    // Validate input
    try {
        schema.parse(req.body);
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.errors[0].message, // Extract Zod validation error message
        });
    }

    const { firstname, lastname, email, password } = req.body;

    try {
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists",
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            firstname,
            lastname,
            email,
            password: hashedPassword,
        });

        // Optionally generate JWT
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        return res.status(200).json({
            success: true,
            message: "User created successfully",
            token,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};



exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the Credentials",
            })
        }

        // check for register user 
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User does not exist. Please Sign-Up",
            });
        }

        // Verify password & generate a JWT token

        const payload = {
            email: user.email,
            id: user._id,
        };


        if (await bcrypt.compare(password, user.password)) {
            // password match
            let token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h",
            });

            user = user.toObject();
            user.token = token;
            user.password = undefined;
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Log the decoded token data
            console.log('Decoded Token:', decoded);

            const options = {
                expires: new Date(Date.now() + 60 * 1000),
                httpOnly: true,
            }

            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message: "User logged in successfully"
            });
        }
        else {
            // password not match
            return res.status(403).json({
                success: false,
                message: "Password does not match",
            })
        }
    }
    catch (err) {
        console.error(err)
        return res.status(500).json({
            success: false,
            message: "Login false"
        })
    }
}



exports.verifyToken = (req, res) => {
    const token = req.headers["authorization"]?.split(" ")[1];  // Get token from header

    if (!token) {
        return res.status(401).json({ success: false, message: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ success: false, message: "Invalid or expired token" });
        }

        // Find user by decoded ID
        const user = User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ success: false, message: "User not found" });
        }
        return res.status(200).json({ success: true, message: "Token is valid" });
    });
};


exports.fetchUsername = async (req, res) => {
    try {
        const { email } = req.query;
        if (!email) {
            return res.status(400).json({ error: "Email is required" });
        }

        // Query the database for the user with the given email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        console.log("User data being sent to frontend:", user); // Log the entire user object to ensure it's populated

        res.json({
            data: {
                "firstName": user.firstname,
                "lastName": user.lastname,
                "email": user.email,
            }
        });
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


exports.checkUser = async (req, res) => {
    const { email } = req.query;
    console.log(email);
    
    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    try {
        const user = await User.findOne({ email });
        if (user) {
            res.status(200).json({ isRegistered: true });
        } else {
            res.status(200).json({ isRegistered: false });
        }
    } catch (error) {
        console.error("Error checking user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};