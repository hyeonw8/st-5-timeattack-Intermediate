import { createSlice } from "@reduxjs/toolkit";

// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.

const initialState = {
  value: 0,
  result: '',
}

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.value += Number(action.payload);
    },
    minusNumber: (state, action) => {
     state.value  -= Number(action.payload);
    },
    setValue: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { addNumber, minusNumber, setValue } = calculatorSlice.actions;
export default calculatorSlice.reducer;