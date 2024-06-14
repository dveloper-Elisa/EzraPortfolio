import React from "react";
import animationData from "../data/animationData.js";
import Videos from "../components/animationVideo.jsx";

const AnimationsDt = () => {
    return (
        <div id="animation" className="mb-5">
            <h2 className="text-center py-10 font-bold font-mono text-6xl bg-slate-200 my-20">Here are Animations</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {animationData.map((pro, index) => (
                    <Videos key={index} src={pro.src} title={pro.title} />
                ))}
            </div>
        </div>
    );
};

export default AnimationsDt;
