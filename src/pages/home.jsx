import { FaPenFancy } from 'react-icons/fa'; 

const Home = () => {
    return (
        <div className="flex justify-center bg-gray-900 text-white h-screen" id="home">
            <div className="flex flex-col md:flex-row justify-center items-center w-[90%] sm:w-[80%] mt-7 gap-8">
                {/* Profile Image Section */}
                <div className="w-full sm:w-[80%] md:w-1/2 lg:w-[40%] rounded-full overflow-hidden shadow-lg">
                    <img 
                        src="./ezra 2.jpg" 
                        alt="Profile not found" 
                        className="w-full h-auto object-cover hover:scale-110 transition-transform duration-1000"
                    />
                </div>

                {/* Text Content Section */}
                <div className="md:mt-0 w-full sm:w-[80%] md:w-1/2 lg:w-[50%] space-y-6">
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
                        I,  <span className="text-yellow-500">Ezra Vox Designer</span>
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                        <FaPenFancy className="text-yellow-500 text-[1rem] inline-block mr-2" />
                        At Ezra Vox Design, we are passionate about creating exceptional, professional designs tailored to your unique needs.
                        Our commitment to innovation and creativity ensures that each project stands out and makes a lasting impact. Your success is our inspiration.
                    </p>
                </div>
            </div>

            {/* <div id="text"></div> */}
        </div>
    );
}

export default Home;
