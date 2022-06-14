//* Header JSX
function Header() {
  return (
    <div className="container flex flex-col justify-between max-w-xl px-4 py-16 mx-auto gap-14 lg:gap-0 lg:flex-row lg:max-w-screen-xl">
      <div className="flex flex-col items-center justify-center order-2 text-center lg:order-1 lg:justify-center xl:items-start xl:text-start lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
        <div className="max-w-xl mb-6">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-extrabold tracking-tight text-lion sm:text-4xl lg:text-5xl xl:text-6xl sm:leading-none">
            Short Your URLS Now!
          </h2>
          <p className="text-base text-gray-500 md:text-lg">
            The Fastest Way to short Your URLs, Start Now.
          </p>
        </div>
        <a
          href="#url-input"
          className="flex items-center justify-center w-40 h-12 px-6 mt-6 font-bold text-white transition duration-200 shadow-md rounded-3xl active:shadow-none bg-elephant hover:bg-bear focus:shadow-outline focus:outline-none "
        >
          Get started
        </a>
      </div>
      <div className="flex items-center justify-center order-1 lg:order-2">
        <img
          src="/images/haeder-image.svg"
          className="object-cover object-top w-full h-64 mx-auto lg:h-auto md:max-w-sm"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
