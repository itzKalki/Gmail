import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Navbar from "./components/Navbar";
import SideBars from "./components/SideBars";
import Email from "./components/Email";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#F6F8FC]">
      <Navbar></Navbar>
      <div className="flex">
        <SideBars></SideBars>
        <Email></Email>
      </div>
    </div>
  );
}

export default App;
