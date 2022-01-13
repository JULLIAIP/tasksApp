import { Route, Routes } from "react-router-dom";
import BoardsPage from "./pages/BoardsPage";
import LoginPage from "./pages/LoginPage";

function Rutes() {
  return (
    <Routes>
      <Route exact path="/" element={<LoginPage />} />

      <Route exact path="/boards" element={<BoardsPage />} />
    </Routes>
  );
}
export default Rutes;
