import { cardActionsClasses } from "@mui/material";

const cards = [
  {
    title: "Instagram",
    description:
      "Be sure to check out our Instagram page for lots more great content!",
    imageUrl: process.env.PUBLIC_URL + "/assets/instagram.jpg",
    direction: "left",
    timeout: 1500,
    link: "https://www.instagram.com/ratemyexhibition/",
  },
  {
    title: "Donate",
    description:
      "If you like what we do and would like to support our work, donations are welcomed on our Patreon.",
    imageUrl: process.env.PUBLIC_URL + "/assets/donate.jpg",
    direction: "right",
    timeout: 1500,
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export default cards;
