import React from "react";
import Brand from "../../atoms/brand";
import Button from "../../atoms/button";
import { navProps } from "../../types/navProps";

import "./index.css";

const Navbar: React.FC<navProps> = ({ isConnected }) => (
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
