import React from "react";
import Link from "next/link";
// import { AiOutlineShopping } from "react-icons/ai";

// import { useStateContext } from "../../context/StateContext";
import { authNav, nav } from "../../lib/helpers/data";

const Navbar = () => {
  //   const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <div className="nav-start">
        <Link href="/">
          <button className="logo" type="button">
            NLG
          </button>
        </Link>

        {nav.map((dt, i) => (
          <Link key={i} href="/product">
            <button className="nav" type="button">
              {dt.title}
            </button>
          </Link>
        ))}
      </div>

      <div className="nav-end">
        {authNav.map((dt, i) => (
          <Link key={i} href="/product">
            <button className="auth" type="button">
              {dt.title}
            </button>
          </Link>
        ))}
      </div>

      {/* <div className="nav-end">
        {authNav.map((dt) => (
          <Link href={dt.link}>
            <button className="auth" type="button">
              {dt.title}
            </button>
          </Link>
        ))}
      </div> */}

      {/* <nav>
        <ul>
          <li>
            <button>
              Watch
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
              >
                <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav> */}

      {/* <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button> */}
    </div>
  );
};

export default Navbar;
