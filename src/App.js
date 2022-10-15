import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HersoSection from "./Components/HeroSection/HersoSection";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HersoSection />}></Route>
        {/* <Route path="/about" element={<About />}></Route> */}
        {/* <Route path="/contact" element={<Contact />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
