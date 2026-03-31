import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
  return (
    <div>
        <div className="min-h-[70vh] flex items-center justify-center text-left">
          <div>
            <h1 className="max-w-133 text-font font-main text-4xl font-medium"> Oie, eu sou a <span className="bg-linear-to-r from-purple via-blue-400 to-blue bg-clip-text text-transparent font-bold">Niethilley</span> e sou desenvolvedora full-stack</h1>
            <h2 className="text-xl text-borders font-others">Movida a café e apaixonada por tecnologia.</h2>
          </div>

          <div>
            <img src="/freepik_0001.png" alt="Chrome Star" className="w-[120px]" />
          </div>
        </div>

        <div className='justify-center flex'> 
          <FontAwesomeIcon icon={faGithub} className="text-font w-12 h-12" />
          <FontAwesomeIcon icon={faLinkedin} className="text-font w-12 h-12" />
        </div>
    </div>
  )
}

export default Hero