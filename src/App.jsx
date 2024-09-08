import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Experience from "./components/Experience";
import Recommended from "./components/Recommended";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div className="flex ">
        <div className=" w-[50%] h-screen bg-zinc-500 rounded-3xl text-center text-4xl p-32 font-bold">
          50% left screen
        </div>
        <div className="w-[50%] h-[325px] bg-[#363c43] rounded-xl ">
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/exp" element={<Experience />} />
            <Route path="/recom" element={<Recommended />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
