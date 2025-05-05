import './index.css'
import {useState} from 'react'


function Hhh(){
  
  const [a,seta]=useState(0)
  const [b,setb]=useState({name:'zhangsan'})
  const [c,setc]=useState({name:'xgm'})

  const k=()=>{
    setc({...c,name:'wangwu'})
  }
  return (
    <div> 
 
        <button onClick={()=>seta(a+1)}>{a}</button>

        <button onClick={()=>setb({...b,name:'lisi'})}>{b.name}</button>

        <button onClick={k}>{c.name}</button>
        <div className='f'></div>
    </div>
  )
  
}
function Vmodel(){
const [value,setvalue]=useState('请输入内容')
return (
   <div>
    <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)}/>
  </div>
)



}
function App() {

  return (
    <div className="App"> 
      <Hhh/>
      <Vmodel/>
    </div>
  )

}

export default App
