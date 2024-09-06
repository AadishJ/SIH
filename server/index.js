const express = require( "express" )
const cors = require('cors');
const app = express();
const PORT = 5000;
const HomeRouter = require( "./Routes/HomeRoute" );
const LoginRouter = require( "./Routes/LoginRoute" );
const SignupRouter = require( "./Routes/SignupRoute" );
const connect = require( "./config/connect" );
connect( "mongodb://localhost:27017/sih" ).then( () => console.log( "MongoDB connected" ) );
app.use( cors() );
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );
app.use( "/", HomeRouter );
app.use( "/login", LoginRouter );
app.use( "/signup", SignupRouter );
app.listen( PORT, () => console.log( "Server Started" ) );