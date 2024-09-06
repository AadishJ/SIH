function Features ()
{
    return (
        <div>
            <div className="text-center py-20 bg-gray-50">
                <h2 className="text-4xl font-semibold text-gray-800 mb-12">Track Your Fitness Journey</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Workout Plans</h3>
                        <p className="text-gray-600">Personalized workout plans tailored to your goals.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Nutrition Tracking</h3>
                        <p className="text-gray-600">Monitor your diet and get nutritional advice.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Progress Monitoring</h3>
                        <p className="text-gray-600">Track your progress with detailed analytics and reports.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Features;