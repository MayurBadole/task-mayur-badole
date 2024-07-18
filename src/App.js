import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Staking from "./pages/Staking";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/staking" element={<Staking />} />
    </Routes>
  );
}
export default App;
