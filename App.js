import React, { useState } from "react";
import Home from "./Home";
import Earn from "./Earn";
import Friends from "./Friends";
import "./styles.css";

export default function App() {
  const [page, setPage] = useState("home");
  return (
    <div className="app-container">
      <div className="main-content">
        {page === "home" && <Home />}
        {page === "earn" && <Earn />}
        {page === "friends" && <Friends />}
      </div>
      <footer className="footer-nav">
        <button
          className={page === "home" ? "footer-btn active" : "footer-btn"}
          onClick={() => setPage("home")}
        >
          <span role="img" aria-label="Home">
            🏠
          </span>
          <small>Home</small>
        </button>
        <button
          className={page === "earn" ? "footer-btn active" : "footer-btn"}
          onClick={() => setPage("earn")}
        >
          <span role="img" aria-label="Earn">
            💰
          </span>
          <small>Earn</small>
        </button>
        <button
          className={page === "friends" ? "footer-btn active" : "footer-btn"}
          onClick={() => setPage("friends")}
        >
          <span role="img" aria-label="Friends">
            👥
          </span>
          <small>Friends</small>
        </button>
      </footer>
    </div>
  );
}
