import ParticlesBackground from '@/components/UI/background-transperant/Particle';
import ProjectCard from '@/components/UI/Card/ProjectCard';
import React from 'react';

const page = () => {
    return (
        <div>
            <ParticlesBackground></ParticlesBackground>

            <div className='mt-20'>
                <h1 className="text-4xl text-center text-white">
                    My Recent <strong className="text-[var(--color-primary)]">Works </strong>
                </h1>
                <p className='text-white text-lg text-center py-2'>
                    Here are a few projects I've worked on recently.
                </p>

          <div className='mx-auto w-[90%]'>
          <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    
                    <ProjectCard
                        imgPath='https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-asr-photogram.netlify.app.png'
                       
                        title="PhotoGram"
                        description="Photo Gram is a dynamic social media platform designed for seamless interaction. Users can create posts, like and comment on them, and update their profile pictures, all within a modern and responsive interface. Admins have tools to manage users and posts, as well as view user feedback. Built with React.js, Redux Toolkit, Tailwind CSS, Node.js, Express.js, MongoDB, and Firebase, the platform ensures smooth performance and secure user authentication."
                        ghLink="https://github.com/Alsaef/social-photo-gram"
                        demoLink="https://asr-photogram.netlify.app/"
                    />
            
             
                    <ProjectCard
                        imgPath='https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-bistro-boss-res.netlify.app.png'
                        title="Bistro Boss"
                        description="Bistro Boss is a modern restaurant management platform built with React.js, Tailwind CSS, Node.js, Express.js, MongoDB, and Firebase. It offers a seamless user experience, allowing visitors to explore diverse menus, view categorized food items, and place orders effortlessly. With its responsive design and robust backend, Bistro Boss delivers a reliable and engaging platform for food lovers."
                        ghLink="https://github.com/Alsaef/bistro-rest"
                        demoLink="https://bistro-boss-res.netlify.app/"
                    />
               
                    <ProjectCard
                        imgPath='https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-asr-code-blog.netlify.app.png'
                     
                        title="Code Blog"
                        description="Code Blog is a modern blogging platform for developers to share insights, tutorials, and experiences. Users can create, edit, and read tech-focused blogs in a clean, responsive interface. Built with React.js, Redux Toolkit, Tailwind CSS, Node.js, Express.js, MongoDB, and Firebase, it ensures smooth performance and efficient state management for a seamless user experience."
                        ghLink="https://github.com/Alsaef/code-blog"
                        demoLink="https://asr-code-blog.netlify.app/"
                    />
                    <ProjectCard
                        imgPath='https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-dnk-nu.vercel.app.png'

                        title="Dnk Shop"
                        description="DNK is a dynamic e-commerce platform offering a seamless shopping experience. Users can explore and purchase products through a sleek and responsive interface. Built with Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB, it combines modern design with robust functionality to ensure efficient performance and user satisfaction."
                        ghLink="https://github.com/Alsaef/Dnk"
                        demoLink="https://dnk-nu.vercel.app/"
                    />
                
            </div>
          </div>
            </div>
        </div>
    );
};

export default page;