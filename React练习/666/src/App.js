//子组件
//1.父组件传递数据
//
import{ useEffect, useState } from 'react'
function Son(props) {
  console.log(props)
  return(
    <div>
      Hello World!{props.name}{props.children}
    </div>
  )
}
const URL="https://geek.itheima.net/v1_0/channels"
//父
function App() {
  const [list,setgo]=useState([])
  //定义的数组基本上可以用map循环
  useEffect(()=>{
    async function getList()
    {
      const bb=await fetch(URL)
      const li=await bb.json()
      console.log(li)
      setgo(li.data.channels)
      
    }
    getList()
  },[])
  function a(){
    return(
      <div>
        <Son name={name} />
      </div>
    )
  }
  const name='小明'
  return (
    <div className="App">
      {/* //子组件被传递数据 */}
      <div>
      <Son name={name} />
      </div>
      <div>
      <Son>
        <span>
          子组件
        </span>
      </Son>
      </div>
      <div>
        {a()}
      </div>

    {/* useEffert练习 */}
    <div>
      <ul>   
      {list.map(item=><li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
      


    </div>
  );
}

export default App;
