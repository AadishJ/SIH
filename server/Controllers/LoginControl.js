const User = require("../Models/user")
async function handleLoginGet ( req, res )
{

}
async function handleLoginPost ( req, res )
{
    console.log( req.body );
    const reqUser = await User.findOne( { email: req.body.email } );
    if ( !reqUser )
    {
        return res.status( 404 ).send( "User not found" );
    }
    console.log(reqUser);
    if ( reqUser.password === req.body.password )
    {
        res.status( 200 ).send( "You are logged in" );
    }
}

module.exports = {
    handleLoginGet,
    handleLoginPost,
}