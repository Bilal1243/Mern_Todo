import HomeScreen from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import UpdateTodo from "./screens/UpdateTodo";
import LoginPage from "./screens/LoginPage";
import RegisterPage from "./screens/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/edit/:id" element={<UpdateTodo />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
