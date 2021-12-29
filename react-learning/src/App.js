import logo from './logo.svg';
import './App.css';

function App() {
  const name='sebas'
  const bool =true
  return (
    <div className="container">
      <h1>Hello World from {name}</h1>
      <h2>{bool?'true':'false'}</h2>
    </div>
  );
}

export default App;
