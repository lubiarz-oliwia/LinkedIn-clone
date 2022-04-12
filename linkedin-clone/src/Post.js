import { Avatar } from "@mui/material";
import React from "react";
import InputOption from "./InputOption";
import "./Post.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

function Post({ name, description, message, photoUrl }) {
 return (
  <div className="post">
   <div className="post__header">
    <Avatar />
    <div className="post__info">
     <h4>{name}</h4>
     <p>{description}</p>
    </div>
   </div>

   <div className="post__body">
    <p>{message}</p>
   </div>

   <div className="post__buttons">
    <InputOption title="Like" Icon={ThumbUpOutlinedIcon} />
    <InputOption title="Comment" Icon={CommentOutlinedIcon} />
    <InputOption title="Share" Icon={ShareOutlinedIcon} />
    <InputOption title="Send" Icon={SendOutlinedIcon} />
   </div>
  </div>
 );
}

export default Post;
