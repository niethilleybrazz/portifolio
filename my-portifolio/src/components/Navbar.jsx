const Navbar = () => {
  return (
    <div className="flex justify-center w-full"> 
      <div className="flex bg-main-bg items-center justify-center m-4 w-full max-w-3xl border border-borders rounded-4xl">
        <div className="flex justify-between items-center p-4 ml-3 mr-3 text-font font-main w-full">
            <div className="text-lg font-bold"><a href="https://www.linkedin.com/in/niethilleybraz/" target="_blank">Niethilley Braz</a></div>
            <ul className="flex gap-6">
              <li><a href="#" className="">Home</a></li>
              <li><a href="#" className="">Sobre</a></li>
              <li><a href="#" className="">Contato</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;