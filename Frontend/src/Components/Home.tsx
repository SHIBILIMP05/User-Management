import React from "react";
import Headers from "./Headers";

export const Home = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('../src/assets/natalie-chaney-zhUzdTgtRP8-unsplash.jpg')",
      }}
      className=" bg-cover bg-center w-full h-screen relative  overflow-hidden bg-indigo-900"
    >
      <Headers />
      <div className="absolute inset-0 bg-black opacity-25"></div>

      <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
        <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
          <span className="font-bold text-yellow-400 uppercase">Himalaya</span>
          <h1 className="mt-4 text-6xl font-bold leading-tight text-white sm:text-7xl">
            Discover the Majesty of the Himalayas
          </h1>
          <a
            href="#"
            className="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100"
          >
            Discover
          </a>
        </div>
      </div>
    </div>
  );
};
