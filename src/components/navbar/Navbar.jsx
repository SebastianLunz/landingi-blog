import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <nav>
      <section>
        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Landingi Blog</Link>
          </div>
        </div>
      </section>
    </nav>
  )
};

export default Navbar;