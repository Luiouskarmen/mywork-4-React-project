import './index.css'
import {useState,useEffect} from 'react'


function Hhh(props){
  
  const [a,seta]=useState(0)
  const [b,setb]=useState({name:'zhangsan'})
  
  const [c,setc]=useState({name:'xgm'})

  //useState的参数是一个函数，返回值是一个对象
  //也可以叫惰性初始化
  const [n,setn]=useState(()=>
  {
    return props.num
  })

  const [count,setcount]=useState(0)

  const k=()=>{
    setc({...c,name:'wangwu'})
  }

  //副作用：只要不是props/state的变化，都会触发
  useEffect(()=>{
    document.title=`你点击了${count}次`
  })

  return (
    <div> 

        <button onClick={()=>setn(n+1)}>{n}</button>
 
        <button onClick={()=>setcount(count+1)}>{count}</button>

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
      <Hhh num={100}/>
      <Vmodel/>
    </div>
  )

}

export default App
