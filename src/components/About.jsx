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
      <Heading title={"About"} description={"About Shortly."} />
      <div className="-mt-6 lg:w-1/2">
        <div className="flex flex-col items-center justify-center gap-1 text-lg text-center text-gray-500 lg:block">
          <ImQuotesLeft className="inline mr-2 text-3xl" />
          <p className="inline text-center">
            Shortly is a URL Shortner Website, Which Let You Short Your URLs in
            The Fastest Way and For Completely Free. Shortly have a Nice Design
            and Responsive Design Thanks To Tailwind Framework, And Have Nice
            Performance and Speed Thanks to MongoDB With Node and Exress for
            Backend.
          </p>
          <ImQuotesRight className="inline ml-2 text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default About;
