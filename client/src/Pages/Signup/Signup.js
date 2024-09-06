import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Signup ()
{
    const navigate = useNavigate();
    const [ formValues, setFormValues ] = useState( {
        name: "",
        email: "",
        password: ""
    } );
    const handleChange = ( event ) =>
    {
        let { name, value } = event.target;
        setFormValues( {
            ...formValues,
            [ name ]: value,
        } );
    }
    const handleSubmit = ( event ) =>
    {
        event.preventDefault();
        axios.post( "/signup", formValues )
            .then( (res) =>
            {
                navigate( "/login" );
            } )
            .catch( ( err ) =>
            {
                console.log( "Error: ", err );
            } )

    }
    return ( <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">Sign Up</h1>
            <form onSubmit={ handleSubmit } className="flex flex-col space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                    <input id="name" type="text" name="name" value={ formValues.name } onChange={ handleChange } required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input id="email" type="email" name="email" value={ formValues.email } onChange={ handleChange } required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                    <input id="password" type="password" name="password" value={ formValues.password } onChange={ handleChange } required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Submit
                </button>
                <Link to="/login" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-center">
                    Already have an Account? Login
                </Link>
            </form>
        </div>
    </div>

    );
}

export default Signup;
