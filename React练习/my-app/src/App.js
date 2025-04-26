//根组件
//App->index.js->root
const C=1000
const list=[{id:1,name:'许光明',sex:'男'},{id:2,name:'张三',sex:'男'},{id:3,name:'李四',sex:'女'}]
const a=true;
const aa={
    color:'red',
    fontSize:'100px'
}
const b=()=>{
    alert('我是一个按钮')
}
const c=(e)=>{
  console.log('我是字母',e)
}
const d=(name)=>{
  console.log('我是一个名字',name)
}

function get()
{
    return '人民万岁！！！'
}

// 定义一个新组件
function Bpp()
{
    return (
        <div>
            我是一个Bpp
        </div>
    )
}

// 定义一个新组件(箭头组件)
const B=()=>{
    return (
        <div>
            我是一个B
        </div>
    )
}
function App() {
  return (
    <div className="App">


      {/* 自闭和 */}
      <Bpp/>
      {/* 正常标签方式 */}
      <Bpp></Bpp>
      <B/>

        Hello React!
        {/* 使用引号传递字符串 */}
        {"许光明好帅"}
        {/* 识别js变量 */}
        {C}
        {/* 函数调用 */}
        {get()}
        {/* 方法调用 */}
        {new Date().getDate()}
        {/* 函数表达式 */}
        {function(){
            return '我是一个函数表达式'
        }()}
        {/*JS对象 */}
        <div style={{color:'red'}}>我是一个div</div>
        {/* css */}
        <div style={aa}>我是一个div</div>
        {/* 表格渲染 */}
        <ul>
            {
                list.map(item=>{
                    return <li key={item.id}>{item.name}   {item.sex}</li>
                })
            }
        </ul>
        {/* 条件渲染1 */}
        {
            a===1?
            <div>一个div</div>:
            <div>我是另一个div</div>
        }
        {/* 条件渲染2 */}
        {
          a&&<span>我是一个div</span>
        }
        {/* 事件响应 */}
        <button onClick={b}>我是一个按钮</button>
        {/* 事件响应eeee */}
        <button onClick={c}>我是一个字母</button>
        {/* 事件传递输入的自定义参数 */}
        <button onClick={()=>d('许光明')}>名字</button>



    </div>
    
  );
}

export default App;
