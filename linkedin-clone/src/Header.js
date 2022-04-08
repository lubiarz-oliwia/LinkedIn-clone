import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import WorkIcon from "@mui/icons-material/Work";
function Header() {
 return (
  <div className="header">
   <div className="header__left">
    <img
     src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1649437327~hmac=5f9f6066c87c4d9e7059861a32fc3dc8"
     alt=""
    />
    <div className="header__search">
     <SearchIcon />
     <input type="text" />
    </div>
   </div>
   <div className="header__right">
    <HeaderOption title="Home" Icon={HomeIcon} />
    <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
    <HeaderOption title="Jobs" Icon={WorkIcon} />
    <HeaderOption title="Messaging" Icon={ChatIcon} />
    <HeaderOption title="Notifications" Icon={NotificationsIcon} />
    <HeaderOption
     avatar="https://www.freepik.com/premium-vector/person-avatar-design_3600045.htm"
     title="me"
    />
   </div>
  </div>
 );
}

export default Header;
