import { Link } from "react-router-dom";
function CallAction ()
{
    return (
        <div>
            <div className="text-center py-20 bg-blue-500 text-white">
                <h2 className="text-4xl font-semibold">Join FitTrack Today!</h2>
                <Link to="/signup">
                    <button className="mt-8 px-8 py-4 bg-white text-blue-500 text-lg font-semibold rounded-md hover:bg-gray-100">
                        Sign Up Now</button>
                </Link>
            </div>
        </div>
    );
}

export default CallAction;