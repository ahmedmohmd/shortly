//* Imports
import About from "./components/About";
import NavBar from "./components/common/NavBar";
import ScrollBtn from "./components/common/ScrollButton";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import UrlInput from "./components/UrlINput";

//* APP JSX
function App() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-cat">
      <NavBar />
      <main className="flex flex-col items-center justify-center w-full">
        <Header />
        <UrlInput />
        <Features />
        <About />
        <Footer />
      </main>
      <ScrollBtn
        position={"right"}
        color={"bg-[#613f77]"}
        hoverColor={"hover:bg-[#4b3662]"}
      />
    </div>
  );
}

export default App;
