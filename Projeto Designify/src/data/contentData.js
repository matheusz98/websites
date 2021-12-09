import ImgOne from "../assets/images/content/rocket.svg";
import ImgTwo from "../assets/images/content/landing-page.svg";
import ImgThree from "../assets/images/content/lost.svg";
import ImgFour from "../assets/images/content/ecommerce.svg";

export const contentOne = {
  id: "projects",
  topLine: {
    text: "Illustration Design",
  },
  headline: "Redesigning prisma",
  description:
    "Designing various vectors to match the themes of our clients. Find out more! ",
  buttonLabel: "View Project",
  imgStart: "start",
  img: ImgOne,
  backgroundColor: "linear-gradient(	150deg,#c99fff -20%,#4a4eff)",
  start: "true",
};

export const contentTwo = {
  reverse: true,
  topLine: {
    text: "Development and Design",
  },
  headline: "Beautiful Landing Page for Lifecycle",
  description:
    "Our team worked for various clients, I don't know what else to write here, it's not my job!",
  buttonLabel: "View Project",

  linkTo: "/more",
  imgStart: "start",
  img: ImgTwo,
  backgroundColor: "linear-gradient(	140deg	,#ffaf73 30%,#fffecc 120%)",

  start: "true",
};

export const contentThree = {
  topLine: {
    text: "Development",
  },
  headline: "Innovative API's ",
  description:
    "Our team has amazing developers that can turn any design sketches and ideas into a fully functioning product.",
  buttonLabel: "View Project",

  linkTo: "/download",
  imgStart: "",
  backgroundColor:
    "linear-gradient(104deg, rgba(151,147,218,1) 0%, rgba(183,137,205,1) 100%)",
  img: ImgThree,
  start: "true",
};

export const contentFour = {
  reverse: true,
  topLine: {
    text: "Photography and Development",
  },
  headline: "New ECommerce systems",
  description:
    "We take your products and make them look better than they already are!",
  buttonLabel: "View Project",

  linkTo: "/more",
  imgStart: "",
  backgroundColor: "linear-gradient(225deg,#0abac2,#b2de94)",
  img: ImgFour,
  start: "true",
};
