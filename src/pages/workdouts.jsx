import { useState } from "react";
import imagedata from "../data/data.js";
import Project from "../components/project.jsx";
import { FaTimes } from "react-icons/fa";

const WorkoutProject = () => {
  const projects = imagedata;
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleClosePopup = () => {
    setSelectedImageIndex(null);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      id="project"
      className="w-[100%] bg-gray-900 flex items-center justify-center py-8"
    >
      <div className="flex flex-col gap-5 w-[80%] justify-center">
        <h2 className="text-center py-10 font-bold font-mono text-3xl sm:text-3xl md:text-3xl bg-gray-800 text-white my-5 break-all">
          Projects
        </h2>

        <div className="w-full grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 transition duration-300">
          {projects.map((pro, index) => (
            <div key={index} onClick={() => handleImageClick(index)}>
              <Project imgurl={pro.imgurl} imageText={pro.imageText} />
            </div>
          ))}

          <div className="justify-center text-white items-center text-center first-letter:uppercase text-base sm:text-lg md:text-3xl">
            For more reference click{" "}
            <a
              href="https://www.instagram.com/mpyisivox?igsh=MXV3eGtwa2Jocncxdg=="
              target="_blank"
              rel="noreferrer"
              className="font-bold text-blue-600 border-2 border-blue-500 hover:bg-black hover:text-white animate-pulse"
            >
              Me
            </a>
          </div>
        </div>
      </div>

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={projects[selectedImageIndex].imgurl}
              alt="Selected project"
              className="max-w-[90%] max-h-[80vh] rounded-md"
            />
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-10 text-white bg-red-600 p-2 rounded-full"
            >
              <FaTimes />
            </button>
            <button
              onClick={handlePreviousImage}
              className="absolute font-extrabold text-[1.5rem] left-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
            >
              {"<"}
            </button>
            <button
              onClick={handleNextImage}
              className="absolute font-extrabold text-[1.5rem] right-2 top-1/2 transform -translate-y-1/2 bg-white bg-transparent text-black p-2 rounded-full"
            >
              {">"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutProject;
