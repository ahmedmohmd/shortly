//* Imports
import styled from "styled-components";

//* Heading Style
const HeadingStyle = styled.div`
  h1 {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 50px;
      height: 7px;
      bottom: 0%;
      left: 50%;
      transform: translateX(-50%);
      background: #74d9d5;
      border-radius: 50px;
    }
  }
`;

//* Heading JSX
function Heading({ title, description }) {
  return (
    <HeadingStyle className="flex flex-col items-center justify-center w-full gap-3 pb-10">
      <h1 className="p-5 text-4xl font-bold text-lion ">{title}</h1>
      <p className="text-gray-400">{description}</p>
    </HeadingStyle>
  );
}

export default Heading;
