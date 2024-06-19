import { MemeItem } from "./DisplayMeme";

export function HotMeme({ memes, doUpvote, doDownvote }) {
  const hotArray = memes.filter((hot) => hot.upvotes - hot.downvotes > 5);
  return (
    <div>
      {hotArray.map((meme) => (
        <MemeItem
          key={meme.title}
          meme={meme}
          doUpvote={doUpvote}
          doDownvote={doDownvote}
        />
      ))}
    </div>
  );
}
