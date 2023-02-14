import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div className="notfound-main">
      <div>
        <h1>Page Not Found...</h1>
        <Link to={"/"}>Back to homepage</Link>
      </div>
    </div>
  );
}
