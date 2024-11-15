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
        <div className="flex flex-col justify-center gap-5 bg-slate-800 rounded-md border p-2 hover:bg-slate-700 hover:text-white hover:transition hover:duration-1000 border-blue-700">
            {isYouTubeVideo || isVimeoVideo || isGoogleDriveVideo ? (
                <iframe
                    src={embedSrc || src}
                    title={title}
                    className="w-full h-44 md:h-56 lg:h-64 sm:h-44 rounded-md"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ) : (
                <video
                    src={src}
                    alt="Video animation here"
                    className="w-full h-44 md:h-44 lg:h-64 sm:h-44 rounded-md"
                    controls
                    autoPlay={false}
                    onContextMenu={(e) => e.preventDefault()}
                    typeof="video/mp4"
                    data-quality="720"
                />
            )}
        </div>
    );
};

export default Videos;
