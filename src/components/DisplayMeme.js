import { useState } from "react";
import { memes } from "./Mem";
import downvoteImg from "../images/downvote.png";
import upvoteImg from "../images/upvote.png";
import React from "react";

// const hotArray = memes.filter((hot) => hot.upvotes - hot.downvotes > 5);

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

  class Upv extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      setUpvotes(upvotes + 1);
    }

    render() {
      return (
        <button className="like" onClick={this.handleClick}>
          <img className="up" src={upvoteImg} alt="" />({upvotes})
        </button>
      );
    }
  }

  class Dov extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      setDownvotes(downvotes + 1);
    }

    render() {
      return (
        <button className="dislike" onClick={this.handleClick}>
          <img className="up" src={downvoteImg} alt="" />({downvotes})
        </button>
      );
    }
  }

  return (
    <div className="memeContainer">
      {" "}
      <h3 className="title">{meme.title}</h3>
      {meme.img}
      <section className="buttonBox">
        {/* <button className="like" onClick={() => setUpvotes(upvotes + 1)}> */}
        <Upv upvotes={upvotes} />
        {/* <img className="up" src={upvoteImg} alt="" />({upvotes})
        </button> */}
        <Dov downvotes={downvotes} />
        {/* <button className="dislike" onClick={() => setDownvotes(downvotes + 1)}>
          {" "}
          <img className="up" src={downvoteImg} alt="" />({downvotes}) */}
        {/* </button> */}
      </section>
    </div>
  );
}
