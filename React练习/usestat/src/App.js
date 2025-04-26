import {useState} from 'react';
import './1.css';
function App() {


  const S={
    color:'green',
    fontSize:"100px"
  }
  const [name,setName]=useState('许光明')
  const [f,set]=useState({n:'abc'})
  const change=()=>{
    set({n:'123'})
  }

  const GET = () => {
   
    setName('暗夜星辰')
  }
  const [count,setCount]=useState(0);
  const Chilk=()=>{
    setCount(count+1)
  }
  return (
    <div> {/* 添加一个父元素 就可以包多个了*/}
      <div>
        <button onClick={Chilk}>{count}</button>
      </div>
      {/* 类名定义 */}
      <div>
        <span className="R">{count}</span>
      </div>
      {/* 行内定义 */}
      <div>
        <span style={{color:'red',fontSize:"100px"}}>{count}</span>
      </div>
      {/* 还可以将其抽出来 */}
      <div>
        <span style={S}>{count}</span>
      </div>
      <div>
        <button onClick={GET}>{name}</button>
      </div>
      <div>
        <button onClick={change}>{f.n}</button>

      </div>
    </div>
  );
}

export default App;
