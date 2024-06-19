import { MemeItem } from "./DisplayMeme";

export function RegularMeme({ memes, doUpvote, doDownvote }) {
  const regularArray = memes.filter((hot) => hot.upvotes - hot.downvotes <= 5);
  return (
    <div>
      {regularArray.map((meme) => (
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
