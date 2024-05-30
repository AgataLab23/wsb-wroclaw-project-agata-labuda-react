import { memes } from "./Mem";
import { MemeItem } from "./DisplayMeme";

const regularArray = memes.filter((hot) => hot.upvotes - hot.downvotes <= 5);

export function RegularMeme() {
  return (
    <div>
      {regularArray.map((meme) => (
        <MemeItem key={meme.title} meme={meme} />
      ))}
    </div>
  );
}
