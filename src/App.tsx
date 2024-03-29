import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ImageList, Form, ReactGridTable, Charts } from './components';

function App() {
  return (
    <div data-testid="appId">
      <h1>Test task</h1>
      <Routes>
        <Route path="/" element={<ImageList />} />
        <Route path="/react-grid" element={<ReactGridTable />} />
        <Route path="/3" element={<h1>TEST PAGE 3</h1>} />
        <Route path="/auth" element={<Form />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </div>
  );
}

export default App;
