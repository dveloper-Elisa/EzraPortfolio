const Home = () => {
    return (
        <div className="flex justify-center max-w-full p-5" id="home">
            <div className="flex flex-col md:flex-row justify-center items-center h-screen gap-10">
                <div className="personal max-w-[90%] md:max-w-[45%]">
                    <img 
                        src="./ezra 2.jpg" 
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
