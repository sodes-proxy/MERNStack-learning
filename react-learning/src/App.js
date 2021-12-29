import Header from "./components/Header";
function App() {
  const name='sebas'
  const bool =true
  return (
    <div className="container">
      <Header/>
      <h1>Hello World from {name}</h1>
      <h2>{bool?'true':'false'}</h2>
    </div>
  );
}
/* Example with class
import React from 'react'
class App extends React.Component{
  render (){
    return <h1>Hello from a class</h1>
  }
}
*/

export default App;
