import {createSlice} from '@reduxjs/toolkit'



  const countSlice = createSlice({
    name: 'count',
    initialState: {
      count: 0,
    },
    reducers: {
      increment(state) {
        state.count += 1
      },
      decrement(state) {
        state.count -= 1
      },
      reset(state) {
        state.count = 0
      },
      setCount(state, action) {
        state.count = action.payload
      }
    },
  })
  
  //actions是一个对象，里面包含了所有的action creator函数,是在reducers中定义的
  // action creator函数是一个函数，返回一个action对象，action对象是一个普通的js对象，包含type和payload两个属性
//countSlice中的reducers中的每一个函数都会被自动转换成一个action creator函数，action creator函数的名字就是reducers中函数的名字
// 例如increment函数会被转换成一个action creator函数，名字也是increment，返回的action对象的type属性是count/increment，payload属性是undefined

export const {increment, decrement, reset} = countSlice.actions
// 暴露出reducer
// 这个reducer是一个组合reducers之后的函数，接收两个参数，一个是state，一个是action
export default countSlice.reducer
