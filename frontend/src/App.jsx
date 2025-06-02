import HomeScreen from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import UpdateTodo from "./screens/UpdateTodo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/edit/:id" element={<UpdateTodo/>}/>
      </Routes>
    </>
  );
}

export default App;