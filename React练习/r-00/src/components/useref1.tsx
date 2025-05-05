import {useRef} from "react"
function Gggg() {

  const inputRef=useRef<HTMLInputElement>(null)
  return (
    <div>
        <input type="text"
        ref={inputRef}
        />
        <button onClick={()=>{
          console.log(inputRef.current?.value)
        }}>发送</button>
    </div>
  )
}
export default Gggg