import "./App.css";
import Home from "./Home/Home.js";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/HarshPortfolioReact/" element={<Home />} />
            <Route path="/HarshPortfolioReact/Home" element={<Home />} />
            <Route
              path="/HarshPortfolioReact/Projects"
              element={<Projects />}
            />
            <Route path="/HarshPortfolioReact/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
