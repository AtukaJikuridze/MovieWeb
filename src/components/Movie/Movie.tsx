import React from "react";
import { useParams } from "react-router-dom";

export default function Movie() {
  const params = useParams();
  {
    console.log(params.id);
  }

  return (
    <div>
      {String(params.id)}
      <h1 style={{ color: "red" }}>Movie {JSON.stringify(params.id)}</h1>
    </div>
  );
}
