import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../stylles/components/socialNetworks.sass";

const socialNetworks = [
  { name: "instagram", icon: <FaInstagram />, },
  { name: "github", icon: <FaGithub /> },
  { name: "linkedin", icon: <FaLinkedinIn /> },
   
];

const SocialNetwork = () => {
  return (
    <section id="social-networks">
    {socialNetworks.map((network) => (
      <a href="#" target="_blank" rel="noreferrer" className="social-btn" id={network.instagram} key={network.instagram}>
        {network.icon}
      </a>,
       <a href="#" target="_blank" rel="noreferrer" className="social-btn" id={network.linkedin} key={network.linkedin}>
       {network.icon}
     </a>,
      <a href="#" target="_blank"  rel="noreferrer" className="social-btn" id={network.github} key={network.github}>
      {network.icon}
    </a>
    ))}
  </section>
  );
};

export default SocialNetwork;