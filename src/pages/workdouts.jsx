import imagedata from "../data/data.js";
import Project from "../components/project.jsx";

const WorkoutProject = () => {
  const projects = imagedata;

  return (
    <div
      id="project"
      className="w-[100%] bg-gray-900 flex items-center justify-center py-8"
    >
      <div className="flex flex-col gap-5 w-[80%] justify-center">
        <h2 className="text-center py-10 font-bold font-mono text-3xl sm:text-3xl md:text-3xl bg-gray-800 text-white my-5 break-all">
          Projects
        </h2>

        <div className="w-full grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 transition duration-300">
          {projects.map((pro, index) => (
            <Project
              key={index}
              imgurl={pro.imgurl}
              imageText={pro.imageText}
            />
          ))}
          <div className="justify-center text-white items-center text-center first-letter:uppercase text-base sm:text-lg md:text-xl">
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
    </div>
  );
};

export default WorkoutProject;
