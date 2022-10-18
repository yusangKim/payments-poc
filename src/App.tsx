import { Route, Routes, useLocation } from "react-router-dom";

import { CallbackPage } from "./CallbackPage";
import { Home } from "./Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<CallbackPage />} />
      </Routes>
    </div>
  );
}

export default App;
