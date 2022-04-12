import React, { useState, useEffect } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";

import PhotoIcon from "@mui/icons-material/Photo";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FeedIcon from "@mui/icons-material/Feed";

function Feed() {
 const [input, setInput] = useState("");
 const [posts, setPosts] = useState([]);

 useEffect(() => {
  db
   .collection("posts")
   .orderBy("timestamp", "desc")
   .onSnapshot((snapshot) =>
    setPosts(
     snapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
     }))
    )
   );
 }, []);

 const sendPost = (event) => {
  event.preventDefault();
  if (input.length > 0) {
   db.collection("posts").add({
    name: "sss",
    description: "ssss",
    message: input,
    photoUrl: "",
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
   });
  }

  setInput("");
 };

 return (
  <div className="feed">
   <div className="feed__inputContainer">
    <div className="feed__input">
     <form>
      <input
       value={input}
       onChange={(e) => setInput(e.target.value)}
       type="text"
       placeholder="Start a post"
      />
      <button type="submit" onClick={sendPost}>
       Send
      </button>
     </form>
    </div>
    <div className="feed__inputOptions">
     <InputOption Icon={PhotoIcon} title="Photo" color="#70b5f9" />
     <InputOption Icon={VideoLibraryIcon} title="Video" color="#7fc15e" />
     <InputOption Icon={CalendarTodayIcon} title="Event" color="#e7a33e" />
     <InputOption Icon={FeedIcon} title="Article" color="#fc9295" />
    </div>
   </div>
   <div>
    {posts.map(({ id, data }) => (
     <Post
      key={id}
      name={data.name}
      description={data.description}
      message={data.message}
      photoUrl={data.photoUrl}
     />
    ))}
   </div>
  </div>
 );
}

export default Feed;
