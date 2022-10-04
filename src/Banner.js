import React from "react";

const Banner = () => {
  return (
    <>
      <div className="">
        <div className="text-2xl md:text-3xl uppercase text-teal-800 font-semibold container- mx-auto text-left px-5">
          Shortner
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 container px-5 mx-auto">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-5xl pb-2">Get Shorter Links Here</h1>
            <div className="text-5xl">Create Link-in-bios</div>
          </div>
          <div className=" flex justify-center items-center md:items-end">
            <img
              src="/gif/banner.gif"
              alt="animated-banner"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
