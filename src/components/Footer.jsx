//* Imports
import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

//* Footer JSX
function Footer() {
  return (
    <footer class="text-gray-600 body-font bg-tiger w-full">
      <div class="gap-6 sm:gap-10 lg:gap-0 container px-5 py-24 mx-auto flex md:items-center lg:items-start lg:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a class="flex title-font font-medium items-start lg:justify-start justify-center text-gray-900">
            <a href="#" className="mb-4 md:mb-0">
              <span className="text-5xl text-gray-200 font-paytoneOne">
                Shortly
              </span>
            </a>
          </a>
        </div>
        <div class="flex-grow justify-center items-start flex flex-wrap lg:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="w-full px-4 text-center">
            <h2 class="title-font font-bold text-gray-300 tracking-widest text-lg mb-3">
              Divigions
            </h2>
            <nav class="list-none mb-10 flex justify-center items-center flex-col gap-1">
              <li>
                <a
                  href="#about"
                  class="text-gray-300 hover:text-elephant hover:cursor-pointer duration-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  class="text-gray-300 hover:text-elephant hover:cursor-pointer duration-500"
                >
                  Features
                </a>
              </li>
            </nav>
          </div>
        </div>
        <div className="flex items-center justify-center w-full gap-5 px-4 lg:justify-end lg:items-start lg:w-1/4 md:w-1/2">
          <a href="https://www.facebook.com/a7m3dmohmd/" target="_blank">
            <BsFacebook className="text-3xl text-gray-200 duration-500 hover:text-elephant" />
          </a>
          <a href="https://github.com/ahmedmohmd" target="_blank">
            <BsGithub className="text-3xl text-gray-200 duration-500 hover:text-elephant" />
          </a>
          <a href="https://www.linkedin.com/in/ahmedmohmd/" target="_blank">
            <BsLinkedin className="text-3xl text-gray-200 duration-500 hover:text-elephant" />
          </a>
          <a href="https://twitter.com/a7m3D_000" target="_blank">
            <BsTwitter className="text-3xl text-gray-200 duration-500 hover:text-elephant" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
