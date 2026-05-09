import { useState } from "react";
import { BiLogoGithub, BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi"; // Novos ícones para o menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="mx-8 md:mx-16 my-8">
      <div className="flex items-center justify-between text-font">
        <div className="text-lg font-bold font-main z-50">
          <a href="https://www.linkedin.com/in/niethilleybraz/" target="_blank" rel="noreferrer">
            Niethilley Braz
          </a>
        </div>

        <ul className="hidden md:flex gap-6 font-others">
          <li><a href="#" className="hover:text-purple transition-colors">Projetos</a></li>
          <li><a href="#" className="hover:text-purple transition-colors">Sobre</a></li>
          <li><a href="#" className="hover:text-purple transition-colors">Contato</a></li>
        </ul>

        <ul className="hidden sm:flex gap-3 items-center">
          <li><a href="#"><BiLogoGithub className="text-font size-5 cursor-pointer hover:scale-110 transition-transform" /></a></li>
          <li><a href="#"><BiLogoLinkedin className="text-font size-5 cursor-pointer hover:scale-110 transition-transform" /></a></li>
          <li><a href="#"><BiLogoGmail className="text-font size-5 cursor-pointer hover:scale-110 transition-transform" /></a></li>
        </ul>

        <div className="md:hidden z-50" onClick={toggleMenu}>
          {isOpen ? <HiX size={28} className="cursor-pointer" /> : <HiMenu size={28} className="cursor-pointer" />}
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-secondary-bg text-font flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center gap-8 text-xl font-others">
          <li><a href="#" onClick={toggleMenu}>Projetos</a></li>
          <li><a href="#" onClick={toggleMenu}>Sobre</a></li>
          <li><a href="#" onClick={toggleMenu}>Contato</a></li>
        </ul>
        
        <ul className="flex gap-6 items-center">
          <li><a href="#"><BiLogoGithub size={30} /></a></li>
          <li><a href="#"><BiLogoLinkedin size={30} /></a></li>
          <li><a href="#"><BiLogoGmail size={30} /></a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;