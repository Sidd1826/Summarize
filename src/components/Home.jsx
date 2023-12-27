
import React from "react";
import Spinner from "./Spinner";
import { useState } from "react";
import { CiLink } from "react-icons/ci";
import { HiChevronRight } from "react-icons/hi2";

const rapidApiKey = import.meta.env.VITE_API_KEY

function Home() {
  const [url, setUrl] = useState("");

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData(url) {
    try {
      setLoading(true);
      const baseUrl = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${encodeURIComponent(
        url
      )}`;
      const response = await fetch(baseUrl, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": rapidApiKey,
          "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
        },
      });
      const data = await response.json();
      console.log(data);
      setText(data);
      setLoading(false);
    } catch (error) {
      console.log("Error", error);
      setLoading(false);
    }
  }

  const clickHandler = (e) => {
    e.preventDefault();
    const urlString = typeof url === "string" ? url : ""; // Ensure urlString is a string
    fetchData(urlString);
  };

  const changeHandler = (event) => {
    setUrl(event.target.value);
    console.log();
  };

  

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={clickHandler}
        >
          <CiLink className="absolute left-0 my-2 ml-3 w-5 text-white" />
          <input
            type="text"
            placeholder="Enter An Article URL"
            onChange={changeHandler}
            required
            className="url_input peer"
          />
          
          
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            <HiChevronRight />
          </button>
        </form>
      </div>
      {/* Display results */}
      <div className="my-10 max-w-full flex justify-center items-center">
        {loading ? (
          <Spinner />
        ) : text.summary && !text.error ? (
          <div className="flex flex-col gap-3">
            <h2 className="font-satoshi font-bold text-gray-300 text-xl">
              Article <span className="green_gradient">Summary</span>
            </h2>
            <div className="summary_box" >
              <p className="font-inter font-medium text-sm text-gray-200" id="textCopy">
                {text.summary}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Home;
