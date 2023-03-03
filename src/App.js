import { useState } from "react"
import ButtonDown from "./button/ButtonDown"
import ButtonReset from "./button/ButtonReset"
import ButtonUp from "./button/ButtonUp"
import "./App.css" 

function App() {

  let [valorActual, setValorActual] = useState(0)
  function clickUp() {
    let up = valorActual + 1
    setValorActual(up)
  }

  function clickDown() {
    let down = valorActual - 1
    setValorActual(down)
  }

  function reset() {
    setValorActual(0)
  }

  return (
    <fieldset>
    <main>
      <h1>Contador</h1>
      <p id="contador">{valorActual}</p>
      <div class="button">
        <ButtonUp textUp="Up" operationUp={clickUp} />
        <ButtonDown textDown="Down" operationDown={clickDown} />
        <ButtonReset textReset="Reset" operationReset={reset} />
      </div>
    </main>
    </fieldset>
  )

}

export default App;

