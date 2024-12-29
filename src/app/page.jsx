import React, { Suspense, lazy } from 'react'
import ParticlesBackground from '@/components/UI/background-transperant/Particle';
const Hero = lazy(() => import('@/components/UI/HeroSection/Hero'));
const MainSection = lazy(() => import('@/components/UI/mainSection/MainSection'));
import Loading from '@/components/UI/Loading/Loading';
const page = () => {
  const dynamic = 'dynamic';
  return (
    <div className=''>
      <ParticlesBackground></ParticlesBackground>
      <Suspense fallback={<Loading></Loading>}>
        <Hero></Hero>
        <MainSection></MainSection>
      </Suspense>
    </div>
  );
};

export default page;