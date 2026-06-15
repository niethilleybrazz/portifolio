import photograph from "../assets/photograph.png";
import DividerCarousel from "./ui/DividerCarousel";

const AboutSection = () => {
  return (
    <div className="py-12 px-6 md:px-12 lg:px-24 max-w-330 mx-auto mb-10 mt-30">

      <div className="">
        <h3 className="font-main text-xl text-font font-medium">Sobre mim</h3>
        <p className="mt-3 font-others text-font text-s">Meu nome é Niethilley Braz e a tecnologia sempre foi minha paixão. Hoje, foco em me tornar uma desenvolvedora Full-Stack. Código limpo e   interfaces intuitivas são indispensáveis. Movida por novos desafios, busco transformar ideias complexas em soluções simples e elegantes.</p>
      </div>

      <div className="mt-30">
        <h4 className="mb-10 font-main text-font text-xl font-medium">Algumas tecnologias que uso e estudo</h4>
      </div>
      <DividerCarousel/>
    </div>
  );
};

export default AboutSection;
