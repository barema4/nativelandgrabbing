import Link from "next/link";
import React from "react";

const SubmitButton = ({ id, path, onClick=()=>{}, className, text = "SAVE" }) => {
  return (
    <div className={"submit-btn " + className}>
      {path ? (
        <Link href={path}>
          <button id={id} onClick={onClick} type="button">{text}</button>
        </Link>
      ) : (
        <button id={id} onClick={onClick}  type="button">{text}</button>
      )}
    </div>
  );
};

export default SubmitButton;
