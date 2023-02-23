import { Route, Routes } from "react-router-dom";

import Login from "./Container/Auth/Login";
import Home from "./Container/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
