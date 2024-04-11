import logo from './logo.svg';
import './App.css';

function Nazareno({ display }) {
  return (
    <div className="Nazareno">
      {display}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Nazareno display="hello world" />
    </div>
  );
}

export default App;
