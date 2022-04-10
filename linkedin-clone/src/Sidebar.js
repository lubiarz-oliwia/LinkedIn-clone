import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
 return (
  <div className="sidebar">
   <div className="sidebar__top">
    <img src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    <Avatar src="" className="sidebar__avatar" />
    <h2>Oli</h2>
    <h4>oli@gmail.com</h4>
   </div>
   
   <div className="sidebar__stats">
    <div className="sidebar__stat">
     <p>Who viewed you</p>
     <p className="sidebar_statNumber">2,838</p>
    </div>
    <div className="sidebar__stat">
     <p>Views on post</p>
     <p className="sidebar_statNumber">2,838</p>
    </div>
   </div>

   <div className="sidebar__bottom">
    <p>Recent</p>
   </div>
  </div>
 );
}

export default Sidebar;
