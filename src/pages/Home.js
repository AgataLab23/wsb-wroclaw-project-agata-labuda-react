import React from "react";
import { DisplayMeme } from "../components/DisplayMeme";

export function Home() {
  return <DisplayMeme />;
}

// const memeList = memes.map((meme) => (
//   <h3 key={meme.id}>
//     Title: {meme.title} <br />
//     {meme.img} <br />
//     <button>upvote{meme.upvotes}</button>
//     <button>downvote {meme.downvotes}</button>
//   </h3>
// ));

// export function Home() {
//   return (
//     <>
//       <h1>Memy ze zwierzętami</h1>
//       <div>{memeList}</div>
//     </>
//   );
// }

// export function DisplayMem() {
//   return (
//     <div>
//       {memes.map((meme) => (
//         <MemeItem key={meme.title} meme={meme} />
//       ))}
//     </div>
//   );
// }

// export function MemeItem({ meme }) {
//   const [upvotes, setUpvotes] = useState(meme.upvotes);
//   const [downvotes, setDownvotes] = useState(meme.downvotes);

//   return (
//     <div>
//       <h3>{meme.title}</h3>
//       <button onClick={() => setUpvotes(upvotes + 1)}>
//         {" "}
//         Upvotes: ({upvotes})
//       </button>
//       <p>Upvotes: {upvotes}</p>
//       <button onClick={() => setDownvotes(downvotes + 1)}>
//         {" "}
//         Downvotes: ({downvotes})
//       </button>
//       <p>Downvotes: {downvotes}</p>
//       <img src={meme} alt={meme.title} />
//     </div>
//   );
// }
