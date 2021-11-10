import ImageOne from "../assets/images/art2.jpg";
import IconOne from "../assets/svg/recording.svg";
import ImageTwo from "../assets/images/hero.jpg";
import ImageThree from "../assets/images/music.png";

export const contentOne = {
  id: "about",
  inverse: true,
  bigImage: true,
  title: {
    text: "IMusic",
    subText: "New",
  },
  subTitle: "Never Stop Listening",
  description:
    "Enjoy audio content where, when and how you want it. IMusic Available On Hundreds of Portable Devices",
  buttonLabel: "Sign Up Now",
  imgStart: "start",
  img: ImageOne,
  alt: "Image One",
  secondImg: IconOne,
  start: "true",
};

export const contentTwo = {
  id: "services",
  reverse: true,
  title: {
    text: "Best Collection",
    subText: "",
  },
  subTitle: "Beats that touch your heart",
  description:
    "Choose your best music choice with huge library Of our top chart songs nad Favorite singers",
  buttonLabel: "Learn More",
  linkTo: "/more",
  imgStart: "",
  img: ImageTwo,
  alt: "Image Two",
  secondImg: "",
  start: "true",
};

export const contentThree = {
  id: "products",
  bigImage: true,
  smallSection: true,
  inverse: true,
  title: {
    text: "Subscribe",
    subText: "",
  },
  subTitle: "Your Music Partner",
  description:
    "We help you understand the music of design and drive transformation from inside out",
  buttonLabel: "Download",
  linkTo: "/download",
  imgStart: "",
  img: ImageThree,
  alt: "Image Three",
  secondImg: "",
  start: "true",
};
