import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";

const Header = () => {
  return (
    <div className="mx-16 my-8 flex-row"> 
      <div className="flex items-center justify-between text-font">
          <div className="text-lg font-bold font-main"><a href="https://www.linkedin.com/in/niethilleybraz/" target="_blank">Niethilley Braz</a></div>
          <ul className="flex gap-6 font-others">
            <li><a href="#" className="">Projetos</a></li>
            <li><a href="#" className="">Sobre</a></li>
            <li><a href="#" className="">Contato</a></li>
          </ul>
          <ul className="flex gap-3 items-center">
              <li><a href=""><BiLogoGithub className="text-font size-5 cursor-pointer hover:scale-110 transition-transform" /></a></li>
              <li><a href=""><BiLogoLinkedin  className="text-font size-5 cursor-pointer hover:scale-110 transition-transform" /></a></li>
              <li><a href=""><BiLogoGmail className="text-font size-5 cursor-pointer hover:scale-110 transition-transform" /></a></li>
          </ul>
      </div>
    </div>
  );
};

export default Header;
