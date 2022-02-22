import { useState } from "react";
import Form from "components/form/Form.jsx";
import ResultRow from "components/result-row/ResultRow";
import "index.css";

function App() {
  const [responseData, setResponseData] = useState([]);
  console.log({ responseData });
  return (
    <div>
      <header className="header">
        <p className="pageWidth">Nearby places</p>
      </header>
      <Form setResponseData={setResponseData} />
      <ResultRow />
    </div>
  );
}

export default App;
