import "./App.css";
import Home from "./Pages/Home";
import Subjects from "./Pages/Subjects";
import { Routes, Route } from "react-router";
import bg from "./Assets/bg.jpg"

function App() {
  return (
    <div className="App">
      <img src={bg} alt="" className="blur" />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/subject/:name" element={<Subjects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
