import React from "react";
import DashBoardLogo from "../assets/sidebar/dashboard.svg";
import SettingLogo from "../assets/sidebar/settings.svg";
import HelpLogo from "../assets/sidebar/help.svg";
import Notification from "../assets/sidebar/notification.svg";
const Sidebar = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-6">
      <div className=" bg-orange-300 rounded-xl m-2">
        <img src={DashBoardLogo} alt=""></img>
      </div>
      <div className=" bg-orange-300 rounded-xl m-2">
        <img src={SettingLogo} alt=""></img>
      </div>
      <div className=" bg-orange-300 rounded-xl m-2">
        <img src={HelpLogo} alt=""></img>
      </div>
      <div className=" bg-orange-300 rounded-xl m-2">
        <img src={Notification} alt=""></img>
      </div>
    </div>
  );
};

export default Sidebar;
