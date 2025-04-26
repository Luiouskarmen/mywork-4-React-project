//1.声明一个状态
import {useRef, useState} from 'react';
function App() {
  //2.获取一个状态值和修改状态值的方法
  const [value,setValue]=useState('')
  //3.修改状态值
  const change=(e)=>{
    setValue(e.target.value)
  }
  //钩子函数
  const intdef=useRef(null)

    return (
    <div className="App">
      <div>
        <input type="text" onChange={change} value={value}></input> 
      </div>
      <div>
        <input type="text" ref={intdef} ></input>
        <button onClick={()=>{
          console.dir(intdef.current)
        }}>获取</button>
      </div>

    </div>
  );
}

export default App;
