import React from "react";
import { memes } from "./Mem";

// import { useState } from "react";

// import downvoteImg from "../images/downvote.png";
// import upvoteImg from "../images/upvote.png";

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
        <button onClick={() => doUpvote(meme.id)}> + {meme.upvotes}</button>
        <button onClick={() => doDownvote(meme.id)}> + {meme.downvotes}</button>
      </section>
    </div>
  );
}

// export function MemeItem({ meme }) {
//   const [upvotes, setUpvotes] = useState(meme.upvotes);
//   const [downvotes, setDownvotes] = useState(meme.downvotes);

//   class Upv extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//       setUpvotes(upvotes + 1);
//     }

//     render() {
//       return (
//         <button className="like" onClick={this.handleClick}>
//           <img className="up" src={upvoteImg} alt="" />({upvotes})
//         </button>
//       );
//     }
//   }

//   class Dov extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//       setDownvotes(downvotes + 1);
//     }

//     render() {
//       return (
//         <button className="dislike" onClick={this.handleClick}>
//           <img className="up" src={downvoteImg} alt="" />({downvotes})
//         </button>
//       );
//     }
//   }

//   return (
//     <div className="memeContainer">
//       {" "}
//       <h3 className="title">{meme.title}</h3>
//       {meme.img}
//       <section className="buttonBox">
//         <Upv upvotes={upvotes} />

//         <Dov downvotes={downvotes} />
//       </section>
//     </div>
//   );
// }
