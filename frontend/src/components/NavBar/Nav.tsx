import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react";

const Nav: React.FC = () => (
  <nav aria-label="Main navigation" className="navbar">
    <div className="page-links">
      <Link to="/fashion">Shopping</Link>
      <Link to="/discounts">Discounts</Link>
      <Link to="/reviews">Customer Reviews</Link>
      <Link to="/about-us">About Us</Link>
      <Link to="/newsletter">Newsletter</Link>
    </div>

    <div className="auth-links">
      <SignedOut>
        <SignInButton>
          <button>Sign In</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  </nav>
);

export default Nav;
