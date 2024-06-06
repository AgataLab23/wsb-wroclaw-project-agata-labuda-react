import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { RegularMeme } from "./components/FilterArrayRegular";
import { HotMeme } from "./components/FilterArrayHot";
import { NotFound } from "./pages/NotFound";
import React, { useState } from "react";
import "./App.css";
import { memes } from "./components/Mem";

function App() {
  const [allMemes, setMemes] = useState(memes);

  const doUpvote = (memeId) => {
    setMemes((memes) =>
      memes.map((meme) => {
        if (meme.id === memeId) {
          return { ...meme, upvotes: meme.upvotes + 1 };
        } else {
          return meme;
        }
      })
    );
  };

  const doDownvote = (memeId) => {
    setMemes((memes) =>
      memes.map((meme) => {
        if (meme.id === memeId) {
          return { ...meme, downvotes: meme.downvotes + 1 };
        } else {
          return meme;
        }
      })
    );
  };

  return (
    <>
      <header className="sticky-header">
        {" "}
        <nav className="nav">
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "green" } : {};
            }}
            to="/"
            className="site-title"
          >
            Memy ze zwierzętami
          </NavLink>

          <ul>
            <li>
              <NavLink
                style={({ isActive }) => {
                  return isActive ? { color: "green" } : {};
                }}
                to="/regular"
              >
                Regular
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => {
                  return isActive ? { color: "green" } : {};
                }}
                to="/hot"
              >
                Hot
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/regular"
          element={
            <RegularMeme
              memes={allMemes}
              doUpvote={doUpvote}
              doDownvote={doDownvote}
            />
          }
        />
        <Route
          path="/hot"
          element={
            <HotMeme
              memes={allMemes}
              doUpvote={doUpvote}
              doDownvote={doDownvote}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
