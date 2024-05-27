import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);
  return <h1>Tu nie ma memów ze zwierzakami...wracasz na stronę główną :D</h1>;
}
