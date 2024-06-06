import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  });
  return (
    <h1 className="notFound">
      Tu nie ma memów ze zwierzakami...wracasz na stronę główną :D
    </h1>
  );
}
