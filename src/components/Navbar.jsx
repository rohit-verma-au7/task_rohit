import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-row gap-5 justify-start items-center h-20 mx-5 lg:ml-[20rem]">
      <h1 className="font-serif cursor-pointer" onClick={() => navigate("/")}>
        Map
      </h1>
      <h1
        className="font-serif cursor-pointer"
        onClick={() => navigate("/application")}
      >
        Application
      </h1>
      <h1 className="font-serif cursor-pointer">Department</h1>
      <hr />
    </div>
  );
};

export default Navbar;
