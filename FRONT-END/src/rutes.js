import { Route, Routes } from "react-router-dom";
import { TasksGlobalProvider } from "./hooks/contextTask";
import BoardsPage from "./pages/BoardsPage";
import LoginPage from "./pages/LoginPage";

function Rutes() {
  return (
    <TasksGlobalProvider>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />

        <Route exact path="/boards" element={<BoardsPage />} />
      </Routes>
    </TasksGlobalProvider>
  );
}
export default Rutes;
