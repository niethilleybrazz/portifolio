const Header = () => {
  return (
    <div className="mx-16 my-8 flex-row"> 
      <div className="flex items-center justify-between text-font">
          <div className="text-lg font-bold font-main"><a href="https://www.linkedin.com/in/niethilleybraz/" target="_blank">Niethilley Braz</a></div>
          <ul className="flex gap-6 font-others">
            <li><a href="#" className="">Home</a></li>
            <li><a href="#" className="">Sobre</a></li>
            <li><a href="#" className="">Contato</a></li>
          </ul>
      </div>
    </div>
  );
};

export default Header;