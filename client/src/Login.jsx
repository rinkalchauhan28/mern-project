import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = { email, password }
      try {
        const res = axios.post("http://localhost:5000/api/v1/login",data)
        console.log(res.data)
        alert("Login successful")
        } catch (error) {
          console.log(error)
      }
    };

  return (
    <div style={{
        width: "500px",
        margin: "50px auto",
        padding: "45px",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.25)"}}>
      <h1 style={{ marginBottom: "35px",color: "#263238",fontSize: "32px"}}>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} style={{
                width: "100%",
                padding: "18px",
                marginBottom: "20px",
                boxSizing: "border-box",
                backgroundColor: "white",
                border: "2px solid #ddd",
                borderRadius: "7px",
                fontSize: "17px",
                outline: "none"}} onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            <input type="password" placeholder="Password" value={password} style={{
                width: "100%",
                padding: "18px",
                marginBottom: "20px",
                boxSizing: "border-box",
                backgroundColor: "white",
                border: "2px solid #ddd",
                borderRadius: "7px",
                fontSize: "17px",
                outline: "none"}} onChange={(e)=>setPassword(e.target.value)}/>
            <br />
            <button type="submit" style={{
                width: "100%",
                padding: "17px",
                background: "#579f8c",
                color: "white",
                border: "none",
                borderRadius: "7px",
                fontSize: "19px",
                fontWeight: "bold",
                cursor: "pointer"}}>Login</button>
        </form>
    </div>
  )
}

export default Login
