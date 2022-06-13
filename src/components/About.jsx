//* Imports
import Heading from "./common/Heading";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

//* About JSX
function About() {
  return (
    <div
      id="about"
      className="container flex flex-col items-center justify-center px-5 pt-16 pb-24 mx-auto lg:px-0"
    >
      <Heading title={"About"} description={"About Website."} />
      <div className="-mt-6 lg:w-1/2">
        <div className="flex flex-col items-center justify-center gap-1 text-lg text-center text-gray-500 lg:block">
          <ImQuotesLeft className="inline mr-2 text-3xl" />
          <p className="inline text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            dolorem nobis ratione ipsa temporibus eum dolore quibusdam porro
            sint rem, necessitatibus unde impedit possimus, magnam suscipit
            architecto accusamus explicabo officiis.
          </p>
          <ImQuotesRight className="inline ml-2 text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default About;
