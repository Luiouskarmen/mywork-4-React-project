import { configureStore } from "@reduxjs/toolkit"

import reducer from "./countstore"

const store = configureStore({
  reducer: {
    count: reducer,
  },
})




export default store



