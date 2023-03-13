import { useState } from 'react';


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
      
      <div className='md:hidden' onClick={handleMenu}>
        <i class="fa-sharp fa-solid fa-bars"></i>
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
        <a href="https://github.com/HeriRoqueTello" target="_blank" class="link"><i class="fa-brands fa-github-alt"></i></a>
        <a target='_blank' href="https://www.linkedin.com/in/heriroquetello/"><i class="fa-brands fa-linkedin"></i></a> 
      </div>
    </nav>
  )
}


