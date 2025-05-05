function Son({getWord}:any){
    const hhh="hello world"
    return (
        <div>
            <button onClick={()=>getWord(hhh)}>点击</button>
        </div>
    )
}

function Dddd(){
    const ll=(word:string)=>{
        console.log(word)
    }
    return (
        <div>
                <hr />
                <Son getWord={ll}></Son>
        </div>
    )
}
export default Dddd