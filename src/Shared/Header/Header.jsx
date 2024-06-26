import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import headPhoto from '../../assets/logo.svg'
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = e => {
    e.preventDefault()
    logOut()
      .then(() => { })
      .catch(error => {
        console.log(error.message);
      })
  }

  const navList = <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/about'}>About</Link></li>
    {
      user?.email ?
        <div className='flex items-center justify-evenly'>
          <li><Link to={'/bookings'}>My Bookings</Link></li>
          {/* <div className='navbar-end'><button onClick={handleLogOut}>LogOut</button></div> */}
        </div>
        :
        <button><Link to={'/login'}>login</Link></button>
    }
  </>

  return (
    <div className="max-w-8xl  navbar bg-base-100 h-28 mb-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navList}
          </ul>
        </div>
        <img className='w-20' src={headPhoto} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navList}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user?.email &&

          <button onClick={handleLogOut}>LogOut</button>



        }
        <button className="btn btn-outline btn-warning text-red-500">Appoinment</button>
      </div>
    </div>
  );
};

export default Header;