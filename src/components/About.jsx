import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const About = () => {
  const [imageFiles, setImageFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setImageFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const imagePreviews = imageFiles.map((file, index) => (
    <img
      key={index}
      src={URL.createObjectURL(file)}
      alt={`Preview ${index}`}
      className=" rounded-lg object-cover w-[190PX] h-[180px]"
    />
  ));

  return (
    <>
      <div className="bg-[#363C43] text-white mx-12 text-xl">
        <h1 className="mt-5 font-serif">
          Hello, I'm Manindar Kumar Singh, a Web Developer with expertise in
          Java OOP, specializing in creating responsive, user-friendly
          interfaces. Proficient in HTML, CSS, JavaScript, and React, I excel at
          translating design into functional code.
        </h1>

        <h1 className="mt-5 font-serif">
          I was born in 15/01/2003 (Kishanganj, Bihar)
        </h1>
      </div>

      {/* Gallery */}
      <hr className="border-4 mt-8 rounded-2xl border-[#363C43] mx-12" />
      <div className="h-[330px] bg-[#363C43] mt-5 rounded-2xl">
        <div className="flex items-center justify-around p-7">
          <div>
            <button className="transition duration-500 ease-in-out text-lg px-10 py-3 rounded-2xl text-white bg-black">
              Gallery
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <label
              htmlFor="fileInput"
              className="transition duration-500 ease-in-out text-lg px-8 py-3 bg-[#454e58] text-white font-bold rounded-3xl cursor-pointer"
            >
              + ADD IMAGE
              <input
                id="fileInput"
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            <button className="bg-zinc-800 text-[#8d949b] p-4 rounded-full mx-4">
              <FaArrowLeft />
            </button>
            <button className="bg-zinc-800 text-[#8d949b] p-4 rounded-full">
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="flex overflow-x-auto space-x-4 p-4">
          {imagePreviews}
        </div>
      </div>
    </>
  );
};

export default About;
