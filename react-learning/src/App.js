import Header from "./components/Header";
const App=()=> {
  const name='sebas'
  const bool =true
  return (
    <div className="container">
      <Header title='Hello'/>
      <h1>Hello World from {name}</h1>
      <h2>{bool?'true':'false'}</h2>
    </div>
  );
}

export default App;