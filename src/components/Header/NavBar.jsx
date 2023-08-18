import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className='my-[28px]'>
        <ul className='flex items-center justify-center gap-x-[67px]'>
          <li>
            <Link to="/flowers" className='link hover:text'>Flowers</Link>
          </li>
          <li>
            <Link to="/plants" className='link hover:text'>Plants</Link>
          </li>
          <li>
            <Link to="/gift" className='link hover:text'>Gifts</Link>
          </li>
          <li>
            <Link to="/discount" className='link hover:text'>Discounts</Link>
          </li>
          <li>
            <Link to="/about" className='link hover:text'>About us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar