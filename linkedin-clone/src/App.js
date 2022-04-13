import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function App() {
 const user = useSelector(selectUser);

 return (
  <div className="app">
   <Header />
   {!user ? (
    <Login />
   ) : (
    <div className="app__body">
     <Sidebar />
     <Feed />
     {/* Widgets */}
    </div>
   )}
  </div>
 );
}

export default App;
