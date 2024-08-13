import Link from "next/link";
import React from "react";

const SubmitButton = ({ path, className, text = "SAVE" }) => {
  return (
    <div className={"submit-btn " + className}>
      {path ? (
        <Link href={path}>
          <button type="button">{text}</button>
        </Link>
      ) : (
        <button type="button">{text}</button>
      )}
    </div>
  );
};

export default SubmitButton;
