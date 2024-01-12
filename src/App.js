import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { consoleAction } from "./store/console_slice";

import { ImageList } from "./components/index";

function App() {
  const stateRedux = useSelector((state) => state.cons.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(consoleAction.showConsole())}>
        Show REDUX
      </button>
      <h1>Test task</h1>

      <Routes>
        <Route path="/" element={<ImageList />} />
        <Route path="/2" element={<h1>TEST PAGE 2</h1>} />
        <Route path="/3" element={<h1>TEST PAGE 3</h1>} />
      </Routes>
    </div>
  );
}

export default App;
