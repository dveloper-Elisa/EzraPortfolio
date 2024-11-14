import React from "react";
import animationData from "../data/animationData.js";
import Videos from "../components/animationVideo.jsx";

const AnimationsDt = () => {
    return (
        <div id="animation" className="py-8 w-[100%] flex flex-col items-center justify-center h-auto bg-zinc-950">
            <div className="flex flex-col gap-5 justify-center w-[80%] h-full">
            
            <h2 className="text-center py-10 font-bold font-mono text-3xl sm:text-3xl md:text-3xl bg-zinc-800 my-5 text-white break-all">Animations</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {animationData.map((pro, index) => (
                    <Videos key={index} src={pro.src} title={pro.title} />
                ))}
            </div>
            </div>
        </div>
    );
};

export default AnimationsDt;
