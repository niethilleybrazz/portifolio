import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiArrowDownWideLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative animate-fade-in">
      <div className="flex items-center justify-center text-left gap-8 z-10 relative">
        <div className="absolute inset-25 pointer-events-none [background:radial-gradient(circle_at_center,var(--color-main-bg)_0%,transparent_70%)] opacity-80 -z-10" />

        <div className="">
          <h1 className="max-w-150 text-font font-main text-5xl font-medium relative">
            Oie, eu sou a{" "}
            <span className="bg-linear-to-r from-purple to-blue bg-clip-text text-transparent font-bold">
              Niethilley
            </span>{" "}
            e sou desenvolvedora full-stack
          </h1>
          <h2 className="text-xl text-borders font-others relative">
            Movida a café e apaixonada por tecnologia.
          </h2>
        </div>
      </div>

      <div className="flex justify-center gap-10 mt-12 z-10 align-center relative items-center ">
        <FaGithub className="text-font size-8 cursor-pointer hover:scale-110 transition-transform" />
        <FaLinkedinIn className="text-font size-8 cursor-pointer hover:scale-110 transition-transform" />
        <MdOutlineMailOutline className="text-font size-8 cursor-pointer hover:scale-110 transition-transform" />
      </div>

        <div className="absolute bottom-10 left-0 right-0 mx-auto w-fit animate-bounce cursor-pointer">
          <RiArrowDownWideLine className="text-font size-10 opacity-70 hover:opacity-100 transition-opacity" />
        </div>
    </div>
  );
};

export default Hero;
