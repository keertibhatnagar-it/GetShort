import React from "react";
const Banner = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-10 ">
        <div className="col-span-6 bg-primary  py-20 md:pl-20 container mx-auto">
          <div className="bg bg-[#0B1736] bg-opacity-20 font-s-medium w-[50%] rounded-md px-5 py-2 ml-5">
            We have shortened <span className="text-[#1A3887]">208,000+</span>{" "}
            Links
          </div>
          <div className="font-s-bold text-5xl px-5 pt-6">
            Get <br className="md:hidden flex" />
            <span className="text-[#1A3887] text-6xl underline font-s-bold">
              Shorten your
            </span>{" "}
            <br />
            links in one place
          </div>
          <div className="py-6 px-5 font-s-medium w-[80%] text-justify">
            Get your short link in 1 click. This link is static, it always
            available.Unlike closed service goo.gl, we support short links like
            surl.li/clck
          </div>
          <div className="px-5 pb-16"></div>
        </div>
        <div className="col-span-4 bg-[#1A3887] pt-32 relative">
          <img
            src="/images/bannerperson.png"
            alt="/"
            className="md:absolute md:-left-36 bottom-0 w-[140%]"
          />
        </div>
      </div>
    </>
  );
};
export default Banner;
