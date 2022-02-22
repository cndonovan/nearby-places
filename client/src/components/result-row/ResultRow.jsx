import * as React from "react";
import "index.css";

function ResultRow({ result }) {
  return (
    <div className="result">
      <div className="result-left">
        <h3>{result.name}</h3>
        <p>{result.vicinity}</p>
      </div>
      <p className="result-right">Rating - {result.rating}</p>
    </div>
  );
}

export default ResultRow;
