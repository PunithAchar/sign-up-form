import React from "react";
import "./Form.css";
import { Info } from "./Info";

const Form = () => {
  return (
    <div className="form">
      <div className="form-h">
        <h3>A</h3>
        <h4>Acme Crop.</h4>
        <p>
          Sign in or <span style={{ color: "#be1809" }}>create an Account</span>{" "}
        </p>
      </div>
      <div className="social-login">
        <p>Sign in With</p>
        <button className="btn logo">
          <img src="google-logo.png" alt="Google-logo" /> Google
        </button>
        <button className="btn logo">
          <img src="github-logo.png" alt="GitHub-logo" /> GitHub
        </button>
        <div class="text-divider"> Or Continue With</div>
        <div className="info">
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Form;
