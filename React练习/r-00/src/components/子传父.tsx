function Son({getWord}:any){
    const hhh="hello world"
    return (
        <div>
            <button onClick={()=>getWord(hhh)}>点击</button>
        </div>
    )
}
function Tip(props:any){
    const ho=()=>{
        console.log(props)
    }
    return (
        <div>
            <h1>我是提示组件</h1>
            <button onClick={ho}></button>
        </div>
    )
}

function Dddd(){
    const ll=(word:string)=>{
        console.log(word)
    }
    const da=()=>{
        console.log("提示")
    }
    return (
        <div>
                <hr />
                <Son getWord={ll}></Son>
                <Tip onTi={da}></Tip>
        </div>
    )
}
export default Dddd