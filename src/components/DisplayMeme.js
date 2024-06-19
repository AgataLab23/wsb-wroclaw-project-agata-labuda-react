import React from "react";
import { memes } from "./Mem";

import downvoteImg from "../images/downvote.png";
import upvoteImg from "../images/upvote.png";

export function DisplayMeme() {
  return (
    <div>
      {memes.map((meme) => (
        <MemeItem key={meme.id} meme={meme} />
      ))}
    </div>
  );
}

export function MemeItem({ meme, doUpvote, doDownvote }) {
  return (
    <div className="memeContainer">
      {" "}
      <h3 className="title">{meme.title}</h3>
      {meme.img}
      <section className="buttonBox">
        <button onClick={() => doUpvote(meme.id)}>
          {" "}
          <img className="up" src={upvoteImg} alt="" /> {meme.upvotes}
        </button>
        <button onClick={() => doDownvote(meme.id)}>
          {" "}
          <img className="up" src={downvoteImg} alt="" /> {meme.downvotes}
        </button>
      </section>
    </div>
  );
}
