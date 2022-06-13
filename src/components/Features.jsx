//* Imports
import { BsSpeedometer } from "react-icons/bs";
import { FaPaintBrush, FaMoneyBillAlt } from "react-icons/fa";
import styled from "styled-components";
import Heading from "./common/Heading";

//* Features Style
const FeaturesStyle = styled.div`
  padding-top: 4rem;
  padding-bottom: 6rem;

  .feature {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 100px;
      height: 15px;
      right: 0;
      top: 50%;
      transform: translate(100%, -50%);
      background: #73d9d5;
    }

    @media (max-width: 768px) {
      &:after {
        width: 15px;
        height: 100px;
        left: 50%;
        top: 100%;
        transform: translate(-50%, 0%);
      }
    }
  }
`;

//* Features JSX
function Features() {
  return (
    <FeaturesStyle id="features" class="container mx-auto">
      <Heading title={"Features"} description={"Website Features."} />
      <div class="mt-6 lg:mt-0 flex px-5 sm:px-6 xl:px-0 flex-col justify-center gap-20 sm:gap-24 lg:gap-16 items-center lg:flex-row  w-full md:justify-center md:items-center">
        <div class="feature rounded-lg pt-14 sm:pt-14 lg:pt-9 bg-white relative p-4 py-6 md:w-2/3 lg:grow  xl:grow-0 lg:w-1/5  flex flex-col text-center items-center">
          <div class="absolute left-1/2 -translate-x-1/2  lg:left-16  top-0 -translate-y-1/2 w-20 h-20 inline-flex items-center justify-center rounded-full bg-lion  mb-5 flex-shrink-0">
            <BsSpeedometer className="text-4xl text-elephant " />
          </div>
          <div class="flex-grow">
            <h2 class="text-lion text-2xl font-bold title-font mb-3">
              Performance
            </h2>
            <p class="leading-relaxed text-md text-gray-500">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug VHS try-hard.
            </p>
          </div>
        </div>
        <div class="lg:translate-y-8 feature rounded-lg pt-14 sm:pt-14 lg:pt-9 bg-white relative p-4 py-6 md:w-2/3 lg:grow  xl:grow-0 lg:w-1/5 flex flex-col text-center items-center">
          <div class="absolute left-1/2 -translate-x-1/2  lg:left-16  top-0 -translate-y-1/2 w-20 h-20 inline-flex items-center justify-center rounded-full bg-lion  mb-5 flex-shrink-0">
            <FaPaintBrush className="text-4xl text-elephant " />
          </div>
          <div class="flex-grow">
            <h2 class="text-lion text-2xl font-bold title-font mb-3">Design</h2>
            <p class="leading-relaxed text-md text-gray-500">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug VHS try-hard.
            </p>
          </div>
        </div>
        <div class="lg:translate-y-16 z-10 rounded-lg pt-14 sm:pt-14 lg:pt-9 bg-white relative p-4 py-6 md:w-2/3 lg:grow  xl:grow-0 lg:w-1/5 flex flex-col text-center items-center">
          <div class="absolute left-1/2 -translate-x-1/2  lg:left-16  top-0 -translate-y-1/2 w-20 h-20 inline-flex items-center justify-center rounded-full bg-lion  mb-5 flex-shrink-0">
            <FaMoneyBillAlt className="text-4xl text-elephant " />
          </div>
          <div class="flex-grow">
            <h2 class="text-lion text-2xl font-bold title-font mb-3">Free</h2>
            <p class="leading-relaxed text-md text-gray-500">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug VHS try-hard.
            </p>
          </div>
        </div>
      </div>
    </FeaturesStyle>
  );
}

export default Features;
