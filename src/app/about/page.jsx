import ParticlesBackground from '@/components/UI/background-transperant/Particle';
import Image from 'next/image';
import { Suspense, lazy } from 'react';
import aboutImg from '../../assets/images/about.png';
import Loading from '@/components/UI/Loading/Loading';
const Skill = lazy(() => import('@/components/UI/skill and knolage/Skill'));
const Github = lazy(() => import('@/components/UI/GitHub-calender/GitHubCalender'));
const page = () => {
    return (
        <div>
            <ParticlesBackground></ParticlesBackground>
            <Suspense fallback={<Loading></Loading>}>
                <div className='mt-20 px-10'>



                    {/* flex information */}

                    <div className='flex items-center md:justify-around justify-center md:flex-row flex-col md:gap-0 gap-6'>



                        <div>
                            <h2 className='text-white text-4xl '>Know Who <span className='text-[var(--color-primary)] mb-5'>I'M</span></h2>
                            <p className='text-white text-lg text-left leading-relaxed font-medium mt-10'>
                                I'm Al Saef Ratul, a full-stack MERN developer skilled in <br /> <span className='text-[var(--color-primary)]'>React.js, Tailwind CSS, Node.js, Express.js, and MongoDB.</span> <br /> I focus on creating dynamic, responsive applications <br /> with features like JWT authentication, pagination, and filtering. <br /> My notable projects include <span className='text-[var(--color-primary)]'>Code Blog, Photo Gram, and DNK Shop.</span>
                            </p>
                        </div>


                        <div>
                            <Image src={aboutImg} alt='about image' width={280} height={280} />
                        </div>



                    </div>



                    {/* skill section */}

                    <Skill />
                    <Github />
                </div>
            </Suspense>
        </div>
    );
};

export default page;