//* NavBar JSX
function NavBar() {
  return (
    <div className="container flex flex-col flex-wrap items-center justify-between p-5 mx-auto lg:max-w-screen-xl md:flex-row">
      <a href="#" className="mb-4 md:mb-0">
        <span className="text-4xl text-lion font-paytoneOne">Shortly</span>
      </a>
      <nav className="flex flex-wrap items-center justify-start gap-3 text-base font-semibold text-center text-gray-400 sm:gap-5 md:py-1 md:pl-4">
        <a href="#about" className="duration-300 hover:text-lion">
          About
        </a>
        <a href="#features" className="duration-300 hover:text-lion">
          Features
        </a>
      </nav>
    </div>
  );
}

export default NavBar;
