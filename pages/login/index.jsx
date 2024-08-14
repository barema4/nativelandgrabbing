import React from "react";
import InsideForm from "./InsideForm";

const SignIn = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div
        style={{
          border: "1px solid gray",
          borderRadius: "1rem",
          padding: "1rem",
          marginTop: "3rem",
        }}
      >
        <InsideForm />
      </div>
    </div>
  );
};

export default SignIn;
