//* Imports
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

//* SCroll Button Style
const ScrollButtonStyle = styled.button`
  animation: scaling 1.5s linear infinite alternate;
  transition: 0.3s;
  outline: none;
  border: none;

  right: ${({ position }) => {
    if (position === "right") return "-75px";
    else return "auto";
  }};

  left: ${({ position }) => {
    if (position === "left") return "-75px";
    else return "auto";
  }};

  @keyframes scaling {
    0% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(5px);
    }
  }
`;

//* Scroll Button JSX
function ScrollButton({ color, hoverColor, position }) {
  const scrollBtn = useRef(null);

  useLayoutEffect(() => {
    scrollBtn.current.style.right = "-100px";

    window.addEventListener("scroll", function () {
      if (this.window.scrollY > 50) {
        if (position === "right") {
          scrollBtn.current.style.right = "20px";
          scrollBtn.current.style.left = "auto";
        }
        if (position === "left") {
          scrollBtn.current.style.left = "20px";
          scrollBtn.current.style.right = "auto";
        }
      } else {
        if (position === "right") {
          scrollBtn.current.style.right = "-75px";
          scrollBtn.current.style.left = "auto";
        }
        if (position === "left") {
          scrollBtn.current.style.left = "-75px";
          scrollBtn.current.style.right = "auto";
        }
      }
    });

    window.onscroll = handleScroll();
  }, []);

  return (
    <ScrollButtonStyle
      onClick={handleScroll}
      ref={scrollBtn}
      className={
        "fixed z-10 p-3 text-white rounded-full sm:bottom-10 bottom-6 " +
        `${color} ${hoverColor}`
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
        />
      </svg>
    </ScrollButtonStyle>
  );

  function handleScroll() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
}

export default ScrollButton;
