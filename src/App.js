import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Search from "./components/Search";
import Application from "./components/Application";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-50 relative">
        <Navbar />
        <div className="bg-blue-800 absolute h-[30rem] mx-10 my-4 rounded-3xl w-14 border-2 shadow-md lg:mt-[3rem]">
          <Sidebar />
        </div>
      </div>
      <Routes>
        <>
          <Route path="/" element={<MainComponent />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </>
        <Route path="/application" element={<Application />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
