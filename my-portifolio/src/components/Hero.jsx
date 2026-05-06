import { RiArrowDownWideLine } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import photograph from '../assets/photograph.png';

const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative animate-fade-in">
      <div className="flex items-center justify-center text-left gap-8 z-10 relative">
        <div className="absolute inset-25 pointer-events-none [background:radial-gradient(circle_at_center,var(--color-main-bg)_0%,transparent_10%)] opacity-80 -z-10" />

        <div className="flex gap-30">
          <img src={photograph} alt="" className="w-68 h-100 object-fill rounded-xl"/>

          <div className="max-w-140">
            <h1 className=" text-font font-main text-2xl font-medium relative">
              Desenvolvedora full-stack
            </h1>
            <p className="flex items-center text-font gap-1 font-medium font-main mt-2"><GrLocation /> Uberlândia - MG</p>
            <h2 className="text-s text-borders font-others relative mt-15">
              Movida a café e apaixonada por tecnologia, desenvolvo aplicações web focadas em entregar experiências fluidas e soluções eficientes.
            </h2>
            <a href="">
              <button className="mt-15 bg-secondary-bg py-3 px-20 text-font font-main border-2 rounded-xl cursor-pointer">Vamos conversar</button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
