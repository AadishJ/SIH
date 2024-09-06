import React from 'react';
import Hero from "./Hero"
import Features from './Features';
import CallAction from './CallAction';


function Home ()
{
    return (
        <div>
            <div className="font-sans bg-gray-100 min-h-screen">
                <Hero />
                <Features />
                <CallAction />
            </div>
        </div>
    );
}

export default Home;
