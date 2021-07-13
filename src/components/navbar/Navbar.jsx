import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css";


const Navbar = () => {

  return (
    <nav>
        <div className={styles.navbar}>
          <div className={styles.navbar__links}>
            <Link to="/" className={styles.navbar__link}>Landingi Blog</Link>
            <Link to="/favouritePosts" className={styles.navbar__link}>Favourite Posts</Link>
            <Link to="/about" className={styles.navbar__link}>About</Link>
          </div>
        </div>
    </nav>
  )
};

export default Navbar;