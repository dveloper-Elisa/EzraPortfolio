const Home = () => {
    return (
        <div className="flex justify-center max-w-full p-5" id="home">
            <div className="flex flex-col md:flex-row justify-center items-center h-screen gap-10">
                <div className="personal max-w-[90%] md:max-w-[45%]">
                    <img 
                        src="https://scontent.fkgl2-1.fna.fbcdn.net/v/t39.30808-6/325384204_864732428147003_5289304738677461071_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFFTd9n5WAuh2ddCRums8AD8ahn6bhEravxqGfpuEStq2mFdtVlkNawteM9e0_FN43imuESyasyXM0f3XLAQCXo&_nc_ohc=RettJV8nJOsQ7kNvgFbP2PA&_nc_zt=23&_nc_ht=scontent.fkgl2-1.fna&oh=00_AYBr1PdLj1qiqlBoMRuamyVsGLovg3iQu4u6V4a_SsGG9A&oe=66713060" 
                        alt="profile not found" 
                        className=" rounded-full w-72 transition-all animate-pulse"
                    />
                </div>

                <div className="font-sans max-w-[90%] md:max-w-[45%] text-center md:text-left">
                    <p className="text-blue-500 font-extrabold text-2xl md:text-3xl lg:text-4xl">
                        Welcome to Ezra Vox Designer
                    </p>    
                    <p className="mt-4 text-sm md:text-base lg:text-lg text-white">
                        At Ezra Vox Design, we are passionate about creating exceptional and professional designs tailored to your unique needs. Our dedication to innovation and creativity ensures that each project stands out and makes a lasting impact. Whether it's branding, web design, or any other creative endeavor, we strive to bring your vision to life with precision and style. Let's collaborate and turn your ideas into visually stunning realities. Your success is our inspiration.
                    </p>
                </div>
            </div>

            <div id="text"></div>
        </div>
    );
}

export default Home;
