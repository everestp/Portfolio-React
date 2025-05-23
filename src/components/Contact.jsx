import React from 'react';
import NavigationCircles from "./Navbar";
const Contact = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl font-light md:mb-32 mb-24">Connect with me</h2>
      <form className="flex flex-col lg:space-y-12 space-y-8">
        <input
          type="email"
          placeholder="Email"
          className="md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 border border-red-500 dark:border-yellow-500 dark:bg-gray-900 dark:placeholder-gray-600 dark:placeholder-yellow-500/50 transition-colors duration-500"
        />
        <textarea
          placeholder="Message"
          className="md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 border dark:bg-gray-900 border-red-500 dark:border-yellow-500 placeholder-gray-600 dark:placeholder-yellow-500/50 transition-colors duration-500"
        />
         <input
          type="submit"
          value="Stay Connected"
          className="md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 bg-red-500 dark:bg-yellow-500 text-white dark:text-gray-900 uppercase font-extrabold cursor-pointer tracking-wide shadow-md shadow-gray-700/20 transition-colors duration-500"
        />
      
      </form>
      <NavigationCircles/>
    </div>
  );
};

export default Contact;
