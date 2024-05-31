import React from "react";
import dogAssaultImg from "../images/mem-napad.jpg";
import catHypnosisImg from "../images/mem-kot-chomik.jpg";
import hedgehogImg from "../images/mem-jeż.jpg";
import pandaImg from "../images/mem-panda.jpg";
import dogaccountantImg from "../images/mem-pies-księgowy.jpg";
import hamsterImg from "../images/mem-chomik.jpg";

export const memes = [
  {
    id: 1,
    title: "Uwaga, złodzieje!",
    upvotes: 6,
    downvotes: 0,
    img: <img className="meme" src={dogAssaultImg} alt="" />,
  },
  {
    id: 2,
    title: "Koteł hipnotyzer",
    upvotes: 1,
    downvotes: 2,
    img: <img className="meme" src={catHypnosisImg} alt="" />,
  },
  {
    id: 3,
    title: "Jeżo Cohello",
    upvotes: 1,
    downvotes: 0,
    img: <img className="meme" src={hedgehogImg} alt="" />,
  },
  {
    id: 4,
    title: "Całe życie na diecie...",
    upvotes: 10,
    downvotes: 0,
    img: <img className="meme" src={pandaImg} alt="" />,
  },
  {
    id: 5,
    title: "Pieseł księgowy",
    upvotes: 1,
    downvotes: 11,
    img: <img className="meme" src={dogaccountantImg} alt="" />,
  },
  {
    id: "6",
    title: "Spanie to żyćko",
    upvotes: 1,
    downvotes: 11,
    img: <img className="meme" src={hamsterImg} alt="" />,
  },
];

// const memeList = memes.map((meme) => (
//   <h3 key={meme.id}>
//     Title: {meme.title} Upvotes: {meme.upvotes} Downvotes: {meme.downvotes} Img:{" "}
//     {meme.img} <button>upvote</button> <button>downvote</button>
//   </h3>
// ));

// export function Memes() {
//   return (
//     <>
//       <h1>Memy ze zwierzętami</h1>
//       <div>{memeList}</div>;
//     </>
//   );
// }
