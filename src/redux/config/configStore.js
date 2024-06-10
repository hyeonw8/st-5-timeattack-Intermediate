import { configureStore } from "@reduxjs/toolkit"
import calculatorSlice from "../slices/calculatorSlice";

// TODO: store 셋업하고 slice에서 import한 reducer를 할당하세요.
const store = configureStore({
  reducer: {
    calculator: calculatorSlice,
  }
})

export default store;