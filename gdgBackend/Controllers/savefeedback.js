const User = require('./../Models/User');


exports.saveFeedback = async(req,res) => {
    const {email , feedback} = req.body;
    if (!email || !feedback) {
        return res.status(400).json({
            success: false,
            message: 'Please provide the basic required fields: email and feedback.'
        });
    }
    try {
        
        const user = await User.findOneAndUpdate({email}
            ,{$push:{feedback}}
            ,{new:true});
            return res.status(200).json(
                {
                    success:true,
                    data:user,
                    message:'Feedback saved Successfully'
                }
            );

    } catch (error) {
        console.error('error while saving feedback:',error);
        return res.status(500).json({
            success:false,
            message:'Internal server error'
        });
    }

}