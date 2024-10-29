import React from "react";
import "./style.css";
import AnchorTemporaryDrawer from "./drawer.js";
import Button from "../Button/index.js";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <Link to="/">
          {" "}
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          {" "}
          <p className="link">Compare</p>
        </Link>
        <Link to="/watchList">
          <p className="link">WatchList</p>
        </Link>
        <Link to="/dashboard">
          <Button
            text={"Dashboard"}
            outlined={false}
            onClick={() => console.log("Btn Clicked")}
          />
        </Link>
      </div>

      <div className="mobile-drawer">
        <AnchorTemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
