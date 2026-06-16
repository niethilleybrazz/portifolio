import photograph from "../assets/photograph.png";
import DividerCarousel from "./ui/DividerCarousel";

const AboutSection = () => {
  return (
    <div className="py-12 px-6 md:px-12 lg:px-24 max-w-330 mx-auto mb-10 mt-10">
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
    
    <div className="flex-2">
      <h3 className="font-main text-xl text-font font-medium">
        Sobre mim
      </h3>

      <p className="mt-3 font-secondary text-font text-s">
        Meu nome é Niethilley, e desde criança sempre gostei do mundo "tech";
        aquela criança que sabia tudo sobre jogos e "nerdices", foi pela ideia
        de criar meu próprio jogo que conheci o mundo de desenvolvimento.
      </p>

      <p className="mt-3 font-secondary text-font text-s">
        Mas foi no desenvolvimento de softwares e web que realmente me apaixonei.
        Atualmente cursando Sistemas de Informação, busco me tornar uma
        desenvolvedora Full-Stack. Para mim código limpo e interfaces
        intuitivas são indispensáveis, e adoro novos desafios.
      </p>
    </div>

    <div className="hidden md:flex justify-center flex-1">
      <img
        src={photograph}
        alt="Niethilley Braz"
        className="w-80 object-cover organic-shape"
      />
    </div>

  </div>
</div>
  );
};

export default AboutSection;
