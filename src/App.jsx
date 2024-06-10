import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addNumber, setValue } from "./redux/slices/calculatorSlice";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const result = useSelector((state) => state.calculator.result);
  const value = useSelector((state) => state.calculator.value);
  //console.log(value)
  const dispatch = useDispatch();

  const handleAddNumber = () => {
    
    dispatch(addNumber)
  }

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input value={value} onChange={(e) => dispatch(setValue(e.target.value))}/> 만큼을 <button onClick={handleAddNumber}>더할게요</button> <button>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과 {result}</h3>
        <p>0</p>
      </div>
    </div>
  );
}

export default App;
