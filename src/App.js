import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Regular } from "./pages/Regular";
import { Hot } from "./pages/Hot";
import { NotFound } from "./pages/NotFound";
import React from "react";
import "./App.css";
function App() {
  return (
    <>
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regular" element={<Regular />} />
        <Route path="/hot" element={<Hot />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
