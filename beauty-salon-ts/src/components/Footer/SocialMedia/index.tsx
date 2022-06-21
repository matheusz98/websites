import { FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";

import styles from "./social-media.module.css";

const socialMediaItems = {
  instagram: {
    icon: <FiInstagram />,
    link: "https://instagram.com",
  },
  facebook: {
    icon: <FiFacebook />,
    link: "https://fb.com",
  },
  youtube: {
    icon: <FiYoutube />,
    link: "https://youtube.com",
  },
};

const SocialMedia = () => {
  return (
    <>
      {Object.entries(socialMediaItems).map(([key, social]) => (
        <a key={key} href={social.link} rel="external">
          <a className={styles.link} href="/" target="_blank" rel="external">
            <i>{social.icon}</i>
          </a>
        </a>
      ))}
    </>
  );
};

export default SocialMedia;
