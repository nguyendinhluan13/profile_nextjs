import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const socials = [
  { name: "Github", icon: <FaGithub />, path: "https://github.com/luan-dev" },
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/luan-dev",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    path: "https://www.facebook.com/luan.dev",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    path: "https://www.instagram.com/luan.dev",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials?.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
