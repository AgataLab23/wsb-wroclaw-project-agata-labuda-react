import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Regular } from "./pages/Regular";
import { Hot } from "./pages/Hot";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <button>
              <NavLink
                style={({ isActive }) => {
                  return isActive ? { color: "red" } : {};
                }}
                to="/regular"
              >
                Regular
              </NavLink>
            </button>
          </li>
          <li>
            <button>
              <NavLink
                style={({ isActive }) => {
                  return isActive ? { color: "red" } : {};
                }}
                to="/hot"
              >
                Hot
              </NavLink>
            </button>
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
