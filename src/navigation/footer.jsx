import { FaLinkedin, FaTwitter, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-gray-900 py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="logo">
                    <img src="./vox mok up.jpg" alt="Logo here" className="max-w-52 rounded-full"/>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                    <div className="flex flex-row gap-4">
                        <a href="https://www.linkedin.com/in/ezra-sibomana-067176260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel="noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">
                            <FaLinkedin/> LinkedIn
                        </a>
                        <a href="https://x.com/EzraSiboma88189?t=qpO6WnDE69cZAOINwNuWSw&s=09" className="text-blue-500 hover:text-blue-400 transition-colors" target='_blank' rel="noreferrer">
                            <FaTwitter/> Twitter
                        </a>
                        <a href="https://www.facebook.com/ezra.sibomana.7" className="text-blue-500 hover:text-blue-400 transition-colors" target='_blank' rel="noreferrer">
                            <FaFacebookF/> Facebook
                        </a>
                        <a href="https://wa.me/+250792497750" className="text-blue-500 hover:text-blue-400 transition-colors" target='_blank' rel="noreferrer">
                            <FaWhatsapp/> Whatsapp
                        </a>
                    </div>

                    <ul className="flex flex-wrap gap-4 md:gap-8 text-white mt-4 md:mt-0">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#project">Project</a></li>
                        <li><a href="#animation">Animations</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;
