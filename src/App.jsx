import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import Home from "./containers/home/Home";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="conta">
        <div className="gradient__bg">
          <Navbar />
          <div className="content">
            <Outlet />
          </div>
        </div>
          <Footer/>
      </div>

    </div>
  );
}

export default App;
