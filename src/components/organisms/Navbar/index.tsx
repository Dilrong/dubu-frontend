import React from "react";
import Brand from "../../atoms/Brand";
import Button from "../../atoms/Button";
import { NavProps } from "../../types/NavProps";

import "./index.css";

const Navbar: React.FC<NavProps> = ({ isConnected }) => (
  <nav className="navbar">
    <Brand />
    <div className="navbar-menu">
      <div className="navbar-end">
        <a href="/">
          <span className="navbar-item">Dubupots</span>
        </a>
        <a href="/my-dubupots">
          <span className="navbar-item">My Pots</span>
        </a>
        <a href="https://dubu-finance.gitbook.io/">
          <span className="navbar-item">Docs</span>
        </a>
      </div>
      {isConnected ? (
        <Button label="x06121...32" />
      ) : (
        <Button label="Connect Wallet" />
      )}
    </div>
  </nav>
);

export default Navbar;
