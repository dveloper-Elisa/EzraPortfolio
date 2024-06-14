const Videos = ({ src, title }) => {
    const isYouTubeVideo = src.includes("youtube.com") || src.includes("youtu.be");
    const isVimeoVideo = src.includes("vimeo.com");
    const isGoogleDriveVideo = src.includes("drive.google.com");

    let embedSrc = src;

    if (isYouTubeVideo) {
        embedSrc = src.replace("watch?v=", "embed/");
    } else if (isVimeoVideo) {
        const videoID = src.split("/").pop();
        embedSrc = `https://player.vimeo.com/video/${videoID}`;
    } else if (isGoogleDriveVideo) {
        const videoID = src.match(/[-\w]{25,}/);
        if (videoID) {
            embedSrc = `https://drive.google.com/file/d/${videoID[0]}/preview`;
        }
    }

    return (
        <div className="flex flex-col justify-center gap-5 bg-slate-700 rounded-md border-[2px] border-blue-500 p-2 hover:bg-slate-800 hover:text-white">
            {isYouTubeVideo || isVimeoVideo || isGoogleDriveVideo ? (
                <iframe
                    src={embedSrc}
                    title={title}
                    className="w-full h-64"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ) : (
                <video src={src} alt="Video animation here" className="w-full h-80" controls />
            )}
            <p className="bottom-3 text-white">
                {title}
            </p>
        </div>
    );
};

export default Videos;
