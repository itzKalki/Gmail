import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Navbar from "./components/Navbar";
import SideBars from "./components/SideBars";
import Inbox from "./components/Inbox";
import Body from "./components/Body";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />
      },
      {
        path: "/mail/:id",
        element: <Mail />
      },
    ]
  },
])
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#F6F8FC]">
      <Navbar></Navbar>
      <div className="flex">
        <SideBars></SideBars>
        <Inbox></Inbox>
      </div>
    </div>
  );
}

export default App;
