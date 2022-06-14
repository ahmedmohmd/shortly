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
  const [loading, setLoading] = useState(false);

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
      {shortenUrl && !loading ? (
        <div className="flex flex-col items-center justify-center w-full gap-8 p-4 bg-white lg:gap-5 lg:flex-row lg:items-center lg:justify-between lg:w-2/3 rounded-xl ">
          <a
            href={fullUrl}
            className="w-full font-semibold text-center truncate lg:text-start text-lion"
          >
            {fullUrl}
          </a>
          <div className="flex flex-col items-center justify-center gap-3 lg:flex-row">
            <a
              href={`${config.apiEndPoint}/${shortenUrl}`}
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
      {loading ? (
        <div className="flex items-center justify-center gap-2 pt-7">
          <svg
            role="status"
            class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-lion"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>{" "}
          <span className="font-light text-lion">Please Wait...</span>
        </div>
      ) : null}
    </div>
  );

  function handleClickBtn(event) {
    setBtnText("Copied!");
    navigator.clipboard.writeText(`${config.apiEndPoint}/${shortenUrl}`);
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

  async function handleShorten(event) {
    event.preventDefault();
    const errorResult = formValidate(inputText, schema);

    if (errorResult) {
      setError(errorResult.fullUrl);
    } else {
      setError("");
      setLoading(true);

      try {
        const { data } = await axios.post(`/shortUrls`, inputText);
        setFullUrl(data.url.full);
        setShortenUrl(data.url.short);
      } catch (error) {
        console.log(error);
      }

      setInputText({ fullUrl: "" });
    }
    setLoading(false);
  }
}

export default UrlInput;
