import { message } from "antd";
import React, { useReducer, useRef } from "react";

export default function SignupForm() {
  const userRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmedRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (passwordRef.current.value !== confirmedRef.current.value) {
        throw new Error("password did not match");
      }
      const item = {
        username: userRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        password_confirm: confirmedRef.current.value,
      };
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        }
      );
      if (response.ok) {
        const res = await response.json();
        userRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        confirmedRef.current.value = "";
        message.success(res.message, 2);
      } else {
        throw new Error("Something Wrong!");
      }
    } catch (err) {
      message.error("Passwords do not match");
      console.log(err.message, 2);
    }
  };
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          alignItems: "center",
          border: "1px solid black",
        }}
        onSubmit={handleSubmit}
      >
        <label>
          UserName:
          <input ref={userRef} type="text" required minLength={4} />
        </label>
        <label>
          Email:
          <input ref={emailRef} type="email" required />
        </label>
        <label>
          Password:
          <input ref={passwordRef} type="password" required minLength={6} />
        </label>
        <label>
          ConfirmPassword:
          <input ref={confirmedRef} type="password" required minLength={6} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
