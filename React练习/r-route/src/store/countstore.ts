import {createSlice} from '@reduxjs/toolkit'


function createStore() {
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
    },
  })

  return countSlice
}
const countSlice = createStore()
export const {increment, decrement, reset} = countSlice.actions
export default countSlice.reducer
export const countSelector = (state: any) => state.count
export default createStore;