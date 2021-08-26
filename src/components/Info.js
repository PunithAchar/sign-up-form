import React from "react";
import "./Form.css";

export const Info = () => {
  return (
    <div className="info">
      <form>
        <p>Email Address</p>
        <input
          type="text"
          placeholder="john.doe@acme.com"
          name="email"
          required
        />

        <p>Password</p>
        <input
          type="password"
          placeholder="**********"
          name="psw"
          required
        />
        
      </form>
      <div className="frgtpsw">
      <input type="checkbox"  name="remember"/><spam>Remember Me</spam>
        <p1 className="fpsw">Forgot Your password ?</p1>
        </div>
    
    <div>
        <button className="btn sign in">Sign in</button>
    </div>
      
    </div>
  );
};
