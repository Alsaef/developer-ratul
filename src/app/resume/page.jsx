import ParticlesBackground from '@/components/UI/background-transperant/Particle';
import React from 'react';
import { AiOutlineDownload } from "react-icons/ai";
const page = () => {
    return (
        <div className="">
            <ParticlesBackground />

            <div className='mt-7'>
                <h2 className='text-4xl text-center text-white'>My <strong className='text-[var(--color-primary)]'>Resume</strong></h2>
            </div>
            <div className="flex items-center justify-center mt-10">
                <a href='https://drive.google.com/file/d/1gVNhH3vi6oZ2iRe_S5NOn4K-mahqMOKh/view?usp=sharing' target='_blank'><button className="px-4 py-2 text-white bg-[var(--color-primary)] rounded flex items-center">
                <AiOutlineDownload />  &nbsp; Download Resume
                </button></a>
            </div>
        </div>
    );
};

export default page;