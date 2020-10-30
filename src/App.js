import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "./Pages/Landing-page/Landing";
import About from "./Pages/About/About";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import CardDetails from "./Components/CardDetails/CardDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Grid />} />
        <Route path="home" element={<Home />} />
        <Route path="/home/:id" element={<CardDetails />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
