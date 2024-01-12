import { Routes, Route } from "react-router-dom";

import { ImageList } from "./components/index";

function App() {
  return (
    <div>
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
