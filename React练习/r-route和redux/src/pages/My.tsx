import { useSelector,useDispatch } from "react-redux"
import { increment, decrement, reset} from "../store/countstore" 

function My() {
  // 通过useSelector获取redux中的数据,解构出count
  const {count} = useSelector((state: any) => state.count)
  const dispatch = useDispatch()
  // 通过useDispatch获取redux中的方法



  
    return (
      <div className="App">
        <div>{count}</div>
          My name is karmen luious
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(reset())}>reset</button>
          <button onClick={() => dispatch({type: 'count/setCount', payload: 100})}>setCount</button>
      </div>
    );
  }
  export default My;