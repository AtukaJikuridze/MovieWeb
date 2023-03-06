import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div className="notfound-main">
      <h1>Page Not Found...</h1>
      <Link to={"/MovieWeb"}>Back to homepage</Link>
    </div>
  );
}
