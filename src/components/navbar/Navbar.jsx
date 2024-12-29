'use client';
import React, { useEffect, useState } from 'react';
import {
  
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
  
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarCollapseBtn,
    NavbarContainer,
    NavbarItem,
    NavbarList,
} from 'keep-react'
import Link from 'next/link';
import logo from '../../assets/images/logo.png';

const AppBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const nav = (
        <>
            <Link href='/'><NavbarItem className=' text-[var(--color-secondary)]  hover:text-[var(--color-primary)]  transition-all duration-200 flex items-center space-x-2'>  <AiOutlineHome style={{ marginBottom: "2px" }} />  <span>HOME</span></NavbarItem></Link>
            <Link href='/about'><NavbarItem className=' text-[var(--color-secondary)] hover:text-[var(--color-primary)]  transition-all duration-200 flex items-center space-x-2'>  <AiOutlineUser style={{ marginBottom: "2px" }} />  <span>ABOUT US</span></NavbarItem></Link>
            <Link href='/projects'><NavbarItem className=' text-[var(--color-secondary)] hover:text-[var(--color-primary)]  transition-all duration-200 flex items-center space-x-2'>  <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />  <span>PROJECTS</span></NavbarItem></Link>
            <Link href='/resume'><NavbarItem className=' text-[var(--color-secondary)] hover:text-[var(--color-primary)]  transition-all duration-200 flex items-center space-x-2'>  <CgFileDocument style={{ marginBottom: "2px" }} />  <span>RESUME</span></NavbarItem></Link>
            <a href='https://asr-code-blog.netlify.app/' target='_blank'><NavbarItem className=' text-[var(--color-secondary)]  hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-200 flex items-center space-x-2'>  <ImBlog style={{ marginBottom: "2px" }} />  <span>BLOGS</span></NavbarItem></a>
        </>
    );
    return (
        <Navbar className={`${isScrolled ? 'shadow-xl bg-transparent backdrop-blur-lg ' : 'bg-transparent'} sticky top-0 z-50 px-4 border-0`}>
            <NavbarContainer>
                <NavbarBrand>
                    <h2 className='text-[var(--color-primary)] text-3xl font-semibold'>A S RATUL</h2>
                </NavbarBrand>
                <NavbarList >
                    {nav}
                </NavbarList>
                <NavbarList>
                </NavbarList>
                <NavbarCollapseBtn />
                <NavbarCollapse className='bg-black'>
                    {nav}

                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
};

export default AppBar;