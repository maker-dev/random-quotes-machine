import QuoteBox from "./components/QuoteBox"
import './App.css';
import { useState } from "react";

function App() {

    const transition: string = "all 2s";

    const [color, setColor] = useState<string>("");

  return (
    <div id="main" style={{backgroundColor: color, transition}}>
      <QuoteBox color={color} setColor={setColor} transition={transition}/>
    </div>
  )
}

export default App
