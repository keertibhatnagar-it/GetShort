import React, { useState } from "react";
import axios from "axios";

const Shortner = () => {
  const [userInput, setUserInput] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [showNotification, setShowNotification] = useState("");
  const [show, setShow] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`
      );
      setShortLink(response.data.result.full_short_link);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };
  const handleCopyClick = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
    navigator.clipboard.writeText(shortLink);
  };
  return (
    <div className="bg-[#0B1736] py-20 relative">
      <div className="container mx-auto px-5">
        <h2 className="text-white text-4xl text-center pb-10">
          Paste the URL to be shortened
        </h2>
        <div
          className=" flex justify-between items-center flex-col md:flex-row gap-3 md:gap-0 "
          id="shortinput"
        >
          <input
            type="text"
            placeholder="Paste your link here..."
            className="py-3 px-3 focus:outline-none rounded-md md:rounded-r-none md:rounded-l-md w-full md:w-[75%]"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            className="bg-[#1A3887] px-5 py-3 hover:bg-[#2B5AD7] duration-500 text-white rounded-md md:rounded-l-none md:rounded-r-md w-full md:w-[25%]"
            onClick={fetchData}
          >
            Shorten
          </button>
        </div>

        {/* should come when clicked in shorten link */}
        {show ? (
          <div className="pt-12 relative flex justify-center">
            <div className="bg-white rounded-md px-8 py-8 w-full flex justify-between items-center flex-col md:flex-row">
              <input
                type="text"
                className="focus:outline-none  w-full md:w-[85%] py-3 text-[#2B5AD7] pl-3"
                value={shortLink}
                disabled
                onChange={(e) => setShortLink(e.target.value)}
              />
              <button
                className="bg-[#EDF2FE] rounded-md px-5 py-3 text-[#1A3887] float-right w-full md:w-[15%] border-[#1A3887] border"
                onClick={handleCopyClick}
              >
                {" "}
                Copy
              </button>
            </div>
            {showNotification && (
              <div className="absolute bottom-2 text-sm text-[#3db54b]">
                Copy to Clipboard!
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Shortner;
