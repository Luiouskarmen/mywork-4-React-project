
function Son(props:any){ 
    //props是一个对象，包含了父组件传递给子组件的所有属性
    return (
        <div>
            我的名字是：{props.name}
        </div>
    )
}
function Children(props){
    return (
        <div>
            喊出我们的口号：{props.children}
        </div>
    )
}

function Pppp(){
    const name = "Karmen"
    return (
        <div>
            Son 组件：<Son name={name}/>
            <Children>
                <span>我是子组件的子组件光明</span>
            </Children>
        </div>
    )
}
export default Pppp