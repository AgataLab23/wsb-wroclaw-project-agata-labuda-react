import { memes } from "./Mem";
import { MemeItem } from "./DisplayMeme";

const hotArray = memes.filter((hot) => hot.upvotes - hot.downvotes > 5);

export function HotMeme() {
  return (
    <div>
      {hotArray.map((meme) => (
        <MemeItem key={meme.title} meme={meme} />
      ))}
    </div>
  );
}
