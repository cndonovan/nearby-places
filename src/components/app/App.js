import Form from 'components/form/Form.jsx'
import ResultRow from 'components/result-row/ResultRow'
import 'index.css';


function App() {
  return (
    <div>
      <header className="header">
        <p className="pageWidth">Nearby places</p>
        <Form />
        <ResultRow />
      </header>
    </div>
  );
}

export default App;
