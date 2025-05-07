import React, { useState } from 'react';
function Bro({onBro}){
    const [name,setName]=useState("")
    const handleClick=()=>{
        onBro(name)
    }

    const pp=(e)=>{
        setName(e.target.value) 
    }
    return (
        <div>
            <h1>兄弟</h1>
            <input type="text" placeholder="请输入兄弟的名字" value={name} onChange={pp}/>
            <button onClick={handleClick}>确定</button>
        </div>
    )
}
function Sis(props:any){
    //props是一个对象，包含了父组件传递给子组件的所有属性
    
    return (
        <div>
            妹妹的哥哥是：{props.namea}
        </div>
    )
}
function Fam(){
    const [bro,setBro]=useState("")

    const getBro=(name:string)=>{
        setBro(name)
    }
    return (
        <div>
            <Bro onBro={getBro}/>
            <Sis namea={bro}/>
            <h1>兄长的名字是：{bro}</h1>
        </div>
    )
}
export default Fam