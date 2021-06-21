import React, { useRef } from "react";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  return (
    <>
      <div>
        <div className="container">
          <form>
            <div className="form-group">
              <p>Email</p>
              <input type="email" ref={emailRef} required></input>
            </div>
            <div className="form-group">
              <p>Password</p>
              <input type="password" ref={passwordRef} required></input>
            </div>
            <div className="form-group">
              <p>Confirm Password</p>
              <input type="password" ref={confirmRef} required></input>
            </div>
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
