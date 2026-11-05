import Home from "./pages/Home";
import "./App.css";
import Saved from "./pages/Saved";
import ListProperty from "./pages/ListProperty";
import Signin from "./pages/Signin";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/list-property" element={<ListProperty />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/discover" element={<Home />} />
    </Routes>
  );
}

export default App;
