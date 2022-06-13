//* Imports
import { useState } from "react";
import config from "../config/config.json";
import Joi from "joi";
import { formValidate } from "../helpers/formValidate";
import axios from "axios";

//* Joi Initialization
const schema = Joi.object({
  fullUrl: Joi.string().uri().required(),
});

//* Add Base Url for Axios
axios.defaults.baseURL = config.apiEndPoint;

//* UrlInput JSX
function UrlInput() {
  const [btnText, setBtnText] = useState("Copy");
  const [inputText, setInputText] = useState({ fullUrl: "" });
  const [error, setError] = useState("");
  const [inputPlaceHolder, setInputPlaceholder] = useState(
    "Shorten a Link Here..."
  );
  const [fullUrl, setFullUrl] = useState("");
  const [shortenUrl, setShortenUrl] = useState("");

  return (
    <div
      id="url-input"
      className="container flex flex-col items-center justify-center max-w-xl gap-5 px-4 py-16 mx-auto md:px-8 lg:max-w-screen-xl"
    >
      <form
        className="flex flex-col items-center justify-between w-full p-10 bg-cover bg-formBackground md:flex-row lg:w-2/3 gap-7 rounded-xl"
        onSubmit={handleShorten}
      >
        <div className="flex flex-col items-start justify-center w-full gap-2">
          <input
            value={inputText.fullUrl}
            type="url"
            placeholder={inputPlaceHolder}
            className={
              "w-full px-4 py-1 text-lg truncate outline-none grow rounded-xl h-14 " +
              (error
                ? "border-2 border-red-400 text-red-400 placeholder-red-300"
                : "border-2 border-transparent text-gray-400 placeholder-gray-400")
            }
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={(event) => {
              setInputText({ fullUrl: event.target.value });
            }}
          />

          {error ? (
            <span className={"italic font-normal text-red-500"}>{error}</span>
          ) : null}
        </div>
        <button
          type="submit"
          className={
            "w-full py-4 font-bold text-white md:w-36 hover:bg-bear rounded-xl bg-elephant " +
            (error ? "self-start" : "")
          }
        >
          Shorten It!
        </button>
      </form>
      {shortenUrl ? (
        <div className="flex flex-col items-center justify-center w-full gap-8 p-4 bg-white lg:gap-5 lg:flex-row lg:items-center lg:justify-between lg:w-2/3 rounded-xl ">
          <a
            href={fullUrl}
            className="w-full font-semibold text-center truncate lg:text-start text-lion"
          >
            {fullUrl}
          </a>
          <div className="flex flex-col items-center justify-center gap-3 lg:flex-row">
            <a
              href={`http://localhost:5000/api/${shortenUrl}`}
              className="font-semibold text-md text-elephant"
            >
              {shortenUrl}
            </a>
            <button
              className={
                "p-2 lg:p-3 text-white rounded-xl text-md font-semibold " +
                (btnText === "Copy" ? "bg-elephant" : "bg-[#7a4f96]")
              }
              onClick={handleClickBtn}
              onBlur={handleBlurBtn}
            >
              {btnText}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );

  function handleClickBtn(event) {
    setBtnText("Copied!");
    navigator.clipboard.writeText(`http://localhost:5000/api/${shortenUrl}`);
  }

  function handleBlurBtn() {
    setBtnText("Copy");
  }

  function handleInputFocus() {
    setInputPlaceholder("");
  }

  function handleInputBlur() {
    setInputPlaceholder("Shorten a Link Here...");
  }

  function handleShorten(event) {
    event.preventDefault();

    const errorResult = formValidate(inputText, schema);

    if (errorResult) {
      setError(errorResult.fullUrl);
    } else {
      setError("");
      axios
        .post(`/shortUrls`, inputText)
        .then((res) => {
          setFullUrl(res.data.url.full);
          setShortenUrl(res.data.url.short);
        })
        .catch((error) => console.log(error));
      setInputText({ fullUrl: "" });
    }
  }
}

export default UrlInput;
