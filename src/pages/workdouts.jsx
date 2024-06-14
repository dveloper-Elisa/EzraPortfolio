import imagedata from "../data/data.js"
import Project from "../components/project.jsx"

const WorkoutProject = () => {
    const projects = imagedata;

    return (
        <div id="project" className="mb-5">
            <h2 className="text-center py-10 font-bold font-mono text-6xl bg-slate-200 my-20">Here is projects</h2>
        <div className="w-full grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 gap-3 transition duration-300" >
            {projects.map((pro, index) => (
                <Project key={index} imgurl={pro.imgurl} imageText={pro.imageText} />
            ))}
            <div className="justify-center items-center text-center first-letter:uppercase"> for more reference click <a href="https://web.facebook.com/ezra.sibomana.7/photos_by" target="_blank" rel="noreferrer" className="font-bold text-blue-800 border-2 border-blue-500 hover:bg-black hover:text-white animate-pulse">Me</a></div>
        </div>

        </div>
    );
};

export default WorkoutProject;