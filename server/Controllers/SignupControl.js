const User = require("../Models/user");

async function handleSignupPost(req, res) {
    let { name, email, password } = req.body;
    if ( !email || !name || !password )
    {
        console.log( "All fields are required" );
        return res.status( 400 );
    }
    try {
        let newUser = await User.create( { name, email, password } );
        return res.status(201).json({
            message: 'User created successfully',
            user: newUser
        });
    } catch (err) {
        console.error("Error creating user:", err);
        if (!res.headersSent) {
            return res.status(400).json({ message: 'Error creating user', error: err.message });
        }
    }
}

module.exports = {
    handleSignupPost,
};
