import { useState } from "react";
import { memes } from "./Mem";

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
    <div>
      <h3>{meme.title}</h3>
      {meme.img}
      <button onClick={() => setUpvotes(upvotes + 1)}>
        {" "}
        Upvotes: ({upvotes})
      </button>
      <button onClick={() => setDownvotes(downvotes + 1)}>
        {" "}
        Downvotes: ({downvotes})
      </button>
    </div>
  );
}
