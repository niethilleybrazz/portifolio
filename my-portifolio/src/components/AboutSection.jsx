import photograph from '../assets/photograph.png';
const AboutSection = () => {
  return (
    <div className="min-h-[90vh] flex  items-center justify-center relative animate-fade-in">
        <div className="font-main text-font max-w-2xl">
            <h2 className="text-4xl font-bold">Um pouco <span className="bg-linear-to-r from-purple to-blue bg-clip-text text-transparent font-bold">
              sobre mim
            </span>{" "}</h2>
            <p className="mt-1 mb-9">Atualmente estudando tecnologias Full-Stack, focada na eficiencia e no futuro do desenvolvimento.  Acredito que a eficiência vem pela organização e codigo limpo que funcione</p>
            <div>
                <h4 className="text-xl mb-4">Tecnologias que uso e estudo</h4>
                <ul className="grid grid-cols-2 gap-2 list-disc">
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>React</li>
                    <li>Spring Boot</li>
                    <li>Node.Js</li>
                    <li>Tailwind CSS</li>
                    <li>Git & GitHub</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Figma</li>
                </ul>
            </div>
        </div>

        <img
            src={photograph}
            className='w-70 h-100 ml-10 object-cover rounded-[30%_70%_70%_30%/30%_30%_70%_70%] transition-all duration-500 hover:rounded-[70%_30%_50%_50%/40%_60%_40%_60%]'
            // className="w-64 h-100 object-cover object-[center_20%] rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
        />
    </div>
  )
}

export default AboutSection