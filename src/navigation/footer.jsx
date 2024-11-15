import { FaLinkedin, FaTwitter, FaFacebookF, FaWhatsapp, FaInstagram} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-gray-900 py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between  gap-5">
                <div className="logo">
                    <img src="./VOX.jpeg" alt="Logo here" className="w-52 h-52 rounded-full"/>
                </div>

                <div className="flex flex-col md:flex-row items-center">
                    <div className="flex flex-col gap-4">
                        <p className='text-2xl text-blue-500 '>Follow me</p>
                        <a href="https://www.linkedin.com/in/ezra-sibomana-067176260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel="noreferrer" className="text-white hover:text-blue-400 flex flex-row items-center gap-2 transition-colors">
                            <FaLinkedin/> LinkedIn
                        </a>
                        <a href="https://x.com/EzraSiboma88189?t=qpO6WnDE69cZAOINwNuWSw&s=09" className="text-white hover:text-blue-400 flex flex-row items-center gap-2 transition-colors" target='_blank' rel="noreferrer">
                            <FaTwitter/> Twitter
                        </a>
                        <a href="https://www.facebook.com/ezra.sibomana.7" className="text-white hover:text-blue-400 flex flex-row items-center gap-2 transition-colors" target='_blank' rel="noreferrer">
                            <FaFacebookF/> Facebook
                        </a>
                        <a href="https://www.instagram.com/mpyisivox?igsh=MXV3eGtwa2Jocncxdg==" className="text-white hover:text-blue-400 flex flex-row items-center gap-2 transition-colors" target='_blank' rel="noreferrer">
                        <FaInstagram/> Instagram
                        </a>
                        <a href="https://wa.me/+250792497750" className="text-white hover:text-blue-400 flex flex-row items-center gap-2 transition-colors" target='_blank' rel="noreferrer">
                            <FaWhatsapp/> Whatsapp
                        </a>
                    </div> 
                </div>
                <div className='flex flex-col gap-4'>
                        <p className='text-2xl text-blue-500'>Naviagtions</p>
                    <ul className="flex flex-col gap-4 text-white mt-4 md:mt-0">
                        <a href="#home"><li>Home</li></a>
                        <a href="#project"><li>Project</li></a>
                        <a href="#animation"><li>Animations</li></a>
                        {/* <a href="#about"><li>About</li></a> */}
                        <a href="#contact"><li>Contact</li></a>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;
