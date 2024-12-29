import React from 'react';
import ParticlesBackground from '../background-transperant/Particle';

const Loading = () => {
    return (
        <div>
            <ParticlesBackground></ParticlesBackground>
            <div className="flex justify-center items-center min-h-screen">
                <div className="rounded-full h-20 w-20 bg-[var(--color-primary)] animate-ping"></div>
            </div>
        </div>
    );
};

export default Loading;