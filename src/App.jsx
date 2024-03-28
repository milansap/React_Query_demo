import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import LayoutData from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutData />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
export default App;
