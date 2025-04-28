import './'
import {useState} from 'react'
function App() {

  const [a,seta]=useState(0)
  const [b,setb]=useState({name:'zhangsan'})
  const [c,setc]=useState({name:'xgm'})

  const k=()=>{
    setc({...c,name:'wangwu'})
  }

  return (
    <div className="App"> 
 
        <button onClick={()=>seta(a+1)}>{a}</button>

        <button onClick={()=>setb({...b,name:'lisi'})}>{b.name}</button>

        <button onClick={k}>{c.name}</button>
    </div>
  )

}

export default App
