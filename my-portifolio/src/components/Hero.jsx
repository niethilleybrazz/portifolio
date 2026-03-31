import chromeStar from '../assets/chromeStar';

const Hero = () => {
  return (
    <div>
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-left">
        <div>
          <h1 className="max-w-155 text-font font-main text-4xl font-medium"> Oie, eu sou a <span className="bg-linear-to-r from-purple via-blue-400 to-blue bg-clip-text text-transparent font-bold">Niethilley</span> e sou desenvolvedora full-stack</h1>
          <h2 className="text-xl text-borders font-others">Movida a café e apaixonada por tecnologia.</h2>
        </div>
        <div>
          <img src="{chromeStar}" alt="Chrome Star" />
        </div>
      </div>
    </div>
  )
}

export default Hero