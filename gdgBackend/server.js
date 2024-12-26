const express = require('express');
const app = express();
const cors = require("cors");
require('dotenv').config();
const connectDB = require('./config/database').connect;

const PORT = process.env.PORT || 3000;
// console.log('Database URL:', process.env.DATABASE_URL);  

// Connect to the database
connectDB();

app.use(express.json());
app.use(cors({
    origin: "https://gdg-mmmut.netlify.app",
    methods: ["GET", "POST"],
    credentials: true,
}));

// Route import and mount
const routers = require('./Routes/routes');
app.use('/api/v1', routers);

// Root endpoint
app.get('/', (req, res) => {
    res.send('HELLO A.P Singh');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
