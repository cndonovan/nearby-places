import { useState } from "react";
import Form from "components/form/Form.jsx";
import ResultRow from "components/result-row/ResultRow";
import "index.css";

function App() {
  const [results, setResults] = useState([]);
  return (
    <div>
      <header className="header">
        <h1 className="pageWidth">Nearby places</h1>
      </header>
      <div className="pageWidth">
        <Form setResults={setResults} />
        <h2>Results</h2>
        {results.map((result) => {
          return <ResultRow key={result.place_id} result={result} />;
        })}
      </div>
    </div>
  );
}

export default App;
