import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram} from 'react-icons/fa'

const social = [
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/vibhor-dass/'},
    { icon: <FaGithub />, path: 'https://github.com/Vib-D' },
    { icon: <FaInstagram />, path: 'https://www.instagram.com/_vibhor_dass._/' },
    { icon: <FaTwitter />, path: 'https://x.com/DassVibhor' },
    
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {social.map((item, index) => {
                return (
                    <Link target="_blank" key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    )
};

export default Socials;
