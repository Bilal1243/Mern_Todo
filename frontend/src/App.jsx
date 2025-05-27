import HomeScreen from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </>
  );
}

export default App;
