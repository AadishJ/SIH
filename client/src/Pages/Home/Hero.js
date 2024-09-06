import { Link } from 'react-router-dom';

function Hero ()
{
    return (
        <div>
            <div className="text-center bg-white py-20 shadow-md">
                <h1 className="text-5xl font-bold text-gray-800">Welcome to FitTrack</h1>
                <p className="text-xl text-gray-600 mt-4">
                    Your ultimate companion in achieving your fitness goals.
                </p>
                <Link to="/signup">
                    <button className="mt-8 px-8 py-4 bg-red-500 text-white text-lg font-semibold rounded-md hover:bg-red-600">
                        Get Started
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Hero;