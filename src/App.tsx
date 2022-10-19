import { Route, Routes, useLocation } from "react-router-dom";

import { CallbackPage } from "./CallbackPage";
import { Home } from "./Home";
import { SuccessPage } from "./SuccessPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </div>
  );
}

export default App;
