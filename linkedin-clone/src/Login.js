import React, {useState} from "react";
import "./Login.css";

function Login() {
 const [name, setName] = useState('');
 const [password, setPassword] = useState('');
 const [email, setEmail] = useState('');

 
    const loginToApp = (e) => {
        e.preventDefault();
    };

    const register = () => {};


 return (
  <div className="login">
   <img src="https://www.idosell.com/panel/file-gate.php?id=81159&lang=pl&size=preview&ext=.png" />
   <form>
    <input type="text" placeholder="Full name" />
    <input type="text" placeholder="Profile picture (URL)" />
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button type="submit" onClick={loginToApp}>
     Sign in
    </button> <p>
    Want to join? <span onClick={register}>Register now </span>
   </p>
   </form>
  
  </div>
 );
}

export default Login;
