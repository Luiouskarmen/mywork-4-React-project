import { useState } from "react"

function Hhhh() {
  const [active, setActive]=useState(false);
  function handleClick(){
    setActive(!active);
  }

  return <div>
    <button onClick={handleClick}>Click me</button>
    <div style={{color: active ? "red" : "blue"}}>karmen</div>
  </div>
}
export default Hhhh