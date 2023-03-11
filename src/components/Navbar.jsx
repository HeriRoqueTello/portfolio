import { useState } from 'react';

import { MdMenu as Menu } from 'react-icons/md';
import { DiGithubBadge as Github } from "react-icons/di";
import { AiFillLinkedin as Linkedin } from "react-icons/ai";


export const Navbar = () => {

  const [menu, setMenu] = useState(false);
  const [desktop, setDesktop] = useState(true);

  const handleMenu = () => {
    if(menu){
      setMenu(false)
      return;
    }
    setMenu(true);
  }

  return (
    <nav className="w-full h-16 flex justify-around items-center bg-transparent backdrop-blur-md text-white text-xl shadow-sm sticky top-0 z-50">
      
      <div className='md:hidden'>
        <Menu  onClick={handleMenu}/>
      </div>

      <div>
        <a href="/">Heri Roque Tello</a>
      </div>

      {
        (menu && desktop) && (
        <div className='absolute top-16 left-0'>
          <ul className="menu bg-black list-none p-4 space-y-2">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        )
      }
      <div className='hidden md:flex'>
          <ul className="flex flex-row items-center gap-8">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
      <div className='flex flex-row gap-4 text-3xl'>
        <a target='_blank' href="https://github.com/heriroquetello"><Github /></a>
        <a target='_blank' href="https://www.linkedin.com/in/heriroquetello/"><Linkedin /></a> 
      </div>
    </nav>
  )
}


