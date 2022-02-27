import { useState } from "react";


function Button({setState, innerText}){
  return <button onClick={() => setState()}>{innerText}</button>
}

function App() {
  const [state,setState] = useState(0)
  const [color, setColor] = useState()
  
  function plus(){
    setState(state + 1);
  }
  function minus(){
    setState(state - 1);
  }
  function zero(){
    setState(0)
  }
  function changeColor(){
    setColor('blue')
  }

  return (
    <div className="App">
      <h1 style={{color:color}}> {state.toString()}</h1>
      <Button setState={minus} innerText={"ayirish"}/>
      <Button setState={zero} innerText={"0"}/>
      <Button setState={plus} innerText={"qo'shish"}/>
      <Button setState={changeColor} innerText={"change color"}/>
    </div>
  );
}

export default App;