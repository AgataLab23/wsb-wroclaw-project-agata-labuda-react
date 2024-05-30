import { useState } from "react";
import { memes } from "./Mem";
import downvoteImg from "./assets/images/downvote.png";
import upvoteImg from "./assets/images/upvote.png";

export function DisplayMeme() {
  return (
    <div>
      {memes.map((meme) => (
        <MemeItem key={meme.id} meme={meme} />
      ))}
    </div>
  );
}

export function MemeItem({ meme }) {
  const [upvotes, setUpvotes] = useState(meme.upvotes);
  const [downvotes, setDownvotes] = useState(meme.downvotes);

  return (
    <div className="memeContainer">
      <h3>{meme.title}</h3>
      {meme.img}
      <br />
      <button className="vote" onClick={() => setUpvotes(upvotes + 1)}>
        {" "}
        <img className="up" src={upvoteImg} alt="" />({upvotes})
      </button>
      <button className="vote" onClick={() => setDownvotes(downvotes + 1)}>
        {" "}
        <img className="up" src={downvoteImg} alt="" />({downvotes})
      </button>
    </div>
  );
}
