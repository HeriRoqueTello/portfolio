import { useState } from 'react';


export const Navbar = () => {

  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    if(menu){
      setMenu(false)
      return;
    }
    setMenu(true);
  }

  return (
    <nav className="w-full h-16 flex justify-around items-center bg-transparent backdrop-blur-md text-white text-xl shadow-sm sticky top-0 z-50">
      
      <div className='md:hidden' onClick={handleMenu}>
        <i className="fa-sharp fa-solid fa-bars"></i>
      </div>

      <div className='flex flex-row justify-between items-center gap-4'>
        <img className='h-10' src="src/assets/svg/logo-no-background.svg" alt="" />
        <a href="/">Heri Roque Tello</a>
      </div>

      {
        (menu) && (
        <div className='absolute top-16 left-0 bg-gray-900 shadow-lg rounded-br-lg text-lg pr-12'>
          <ul className="list-none p-4 space-y-2">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#toolbox">Tools</a></li>
          </ul>
        </div>
        )
      }
      <div className='hidden md:flex'>
          <ul className="flex flex-row items-center gap-8">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#toolbox">Tools</a></li>
          </ul>
        </div>
      <div className='flex flex-row gap-4 text-3xl'>
        <a href="https://github.com/HeriRoqueTello" target="_blank"><i className="fa-brands fa-github-alt"></i></a>
        <a target='_blank' href="https://www.linkedin.com/in/heriroquetello/"><i className="fa-brands fa-linkedin"></i></a> 
      </div>
    </nav>
  )
}


