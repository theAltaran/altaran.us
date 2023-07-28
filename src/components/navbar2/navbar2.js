import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import styles from "./navbar2.module.css";

export default function Navbar() {
  const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <li>
        <Link to={to} className={isActive ? styles.active : ""} {...props}>
          {children}
        </Link>
      </li>
    );
  };

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.siteTitle}>
        altaran.us
      </Link>
      <ul>
        <CustomLink to="/AloeCam">aloeCam</CustomLink>
        <CustomLink to="/space">space</CustomLink>
        <CustomLink to="/alt">alt</CustomLink>
        <CustomLink to="/altAI">ai</CustomLink>
      </ul>
    </nav>
  );
}
