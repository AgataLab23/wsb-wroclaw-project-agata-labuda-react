import dogAssaultImg from "./assets/images/mem-napad.jpg";
import catHypnosisImg from "./assets/images/mem-kot-chomik.jpg";
import hedgehogImg from "./assets/images/mem-jeż.jpg";
import pandaImg from "./assets/images/mem-panda.jpg";
import dogaccountantImg from "./assets/images/mem-pies-księgowy.jpg";
import hamsterImg from "./assets/images/mem-chomik.jpg";
const memes = [
  {
    id: 1,
    title: "Mem 1",
    upvotes: 6,
    downvotes: 0,
    img: <img src={dogAssaultImg} alt="" />,
  },
  {
    id: 2,
    title: "Mem 2",
    upvotes: 1,
    downvotes: 2,
    img: <img src={catHypnosisImg} alt="" />,
  },
  {
    id: 3,
    title: "Mem 3",
    upvotes: 1,
    downvotes: 0,
    img: <img src={hedgehogImg} alt="" />,
  },
  {
    id: 4,
    title: "Mem 4",
    upvotes: 10,
    downvotes: 0,
    img: <img src={pandaImg} alt="" />,
  },
  {
    id: 5,
    title: "Mem 5",
    upvotes: 1,
    downvotes: 11,
    img: <img src={dogaccountantImg} alt="" />,
  },
  {
    id: 6,
    title: "Mem 5",
    upvotes: 1,
    downvotes: 11,
    img: <img src={hamsterImg} alt="" />,
  },
];

const memeList = memes.map((meme) => (
  <h3 key={meme.id}>
    Title: {meme.title} Upvotes: {meme.upvotes} Downvotes: {meme.downvotes} Img:{" "}
    {meme.img}
  </h3>
));

function memeArray() {
  return (
    <>
      <h1>Memy ze zwierzętami</h1>
      <div>{memeList}</div>;
    </>
  );
}
