import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screen/Home";
import About from "./screen/About";
import Blog from "./screen/Blog";
import Destinations from "./screen/Destinations";
import FAQS from "./screen/FAQS";
import Hospitals from "./screen/Hospitals";
import Treatments from "./screen/Treatments";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [loader, setLoader] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  }, [])
  return (
    <div>
      {loader ? (
        <div className="h-screen flex justify-center items-center animate-pulse">
          <img src={require("./assets/topsection/aafiya m.png")} alt=" " />

        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/destination" element={<Destinations />} />
            <Route path="/faq" element={<FAQS />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/treatments" element={<Treatments />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
