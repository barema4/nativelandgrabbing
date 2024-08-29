import React from "react";
import Link from "next/link";
import { authNav, nav } from "../../lib/helpers/data";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-start">
        <Link href="/">
          <button className="logo" type="button">
            NLG
          </button>
        </Link>

        {nav.map((dt, i) => (
          <div key={i}>
            <Link href={dt.link}>
              <button className="nav" type="button">
                {dt.title}
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="nav-end">
        {authNav.map((dt, i) => (
          <Link key={i} href={dt.link}>
            <button className="auth" type="button">
              {dt.title}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
