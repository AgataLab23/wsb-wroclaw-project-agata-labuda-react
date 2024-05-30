import { memes } from "./Mem";

export function FilterArrayHot() {
  const hotArray = memes.filter((hot) => hot.upvotes - hot.downvotes > 5);

  return console.log(hotArray);
}
