import React from 'react';
import homeHero from '../../../assets/images/my-bg-02d338d3.png';
import Image from 'next/image';
import Type from './Type';

const Hero = () => {
    
    return (
      <div  >
          <div className='px-4 mt-24 '>
            <div className='z-10 flex flex-col md:flex-row items-center justify-around space-y-10 md:space-y-0 md:space-x-10'>
                <div className='text-center md:text-left'>
                    <h1 className='text-3xl md:text-5xl font-semibold text-[var(--color-secondary)] leading-relaxed'>
                        Hi There!  <span className="inline-block wave">👋🏻</span> <br /> I'M
                        <span className='text-[var(--color-primary)] '> AL SAEF RATUL</span>
                    </h1>
                  <Type></Type>
                </div>
                <div>
                    <Image src={homeHero} alt="homeHero" width={250} height={250} />
                </div>
            </div>
        </div>
      </div>
    );
};

export default Hero;

