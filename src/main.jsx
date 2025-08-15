import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MovieCatalog from "./MovieCatalog.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MovieCatalog />
  </StrictMode>
);
