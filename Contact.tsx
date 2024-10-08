/**
 * This code was generated by Builder.io.
 */
import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-24 max-md:max-w-full">
      <div className="flex flex-col items-center max-w-full text-center w-[685px]">
        <h2 className="text-5xl font-bold leading-loose text-gray-100">
          <span>Contact </span>
          <span className="text-yellow-500">Me</span>
        </h2>
        <p className="mt-6 text-base leading-loose text-gray-400 max-md:max-w-full">
          Graduate Student
        </p>
      </div>
      <div className="flex flex-wrap gap-10 items-center mt-14 text-base leading-10 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto font-bold text-yellow-500 min-w-[240px]">
          <p>
            <span>Address _ </span>
            <span className="text-gray-100">United States</span>
          </p>
          <p className="mt-4">
            <span>Linkedin.com/</span>
            <span className="text-gray-100">mahtab-masoudi</span>
          </p>
          <p className="mt-4">
            <span>github.com/</span>
            <span className="text-gray-100">mahtabmasoudi</span>
          </p>
          <p className="mt-4">
            <span>issue.com/</span>
            <span className="text-gray-100">www.abc.xyz.com</span>
          </p>
        </div>
        <form className="flex flex-col items-start self-stretch my-auto text-gray-100 min-w-[240px] w-[540px]">
          <div className="flex flex-col max-w-full whitespace-nowrap w-[350px]">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="px-5 py-3 bg-gray-800 max-md:pr-5"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col self-stretch mt-8 w-full whitespace-nowrap">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              className="px-5 pt-2.5 pb-24 bg-gray-800 max-md:pr-5 max-md:pb-28 max-md:max-w-full"
              placeholder="Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="gap-2.5 px-5 py-4 mt-8 leading-loose text-black bg-yellow-500 rounded"
          >
            Contact us
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
