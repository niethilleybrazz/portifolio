import { RiArrowDownWideLine } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";

const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative animate-fade-in py-12">
      <div className="flex items-center justify-center text-center gap-8 z-10 relative px-6">
        <div className="absolute inset-25 pointer-events-none [background:radial-gradient(circle_at_center,var(--color-main-bg)_0%,transparent_10%)] opacity-80 -z-10"/>

        <div className="flex flex-col md:flex-row gap-8 md:gap-30 items-center text-center">
          <div className="max-w-full md:max-w-140 text-center">
            <h1 className="text-font font-main text-4xl font-medium relative">
              Desenvolvedora full-stack
            </h1>
            <p className="flex items-center justify-center text-font gap-1 font-medium font-main mt-2">
              <GrLocation /> Uberlândia - MG
            </p>
            <h2 className="text-s text-font-secondary font-secondary relative mt-8 md:mt-15">
              Movida a café e apaixonada por tecnologia, desenvolvo aplicações
              web focadas em entregar experiências fluidas e soluções
              eficientes.
            </h2>
            <a href="#contact">
              <button className="mt-4 md:mt-30 py-2 px-20 text-font-secondary font-main border-2 rounded-xl cursor-pointer border-borders hover:text-font hover:border-font">
                Vamos conversar
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
