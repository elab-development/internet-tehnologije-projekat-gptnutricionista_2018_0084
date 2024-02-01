import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" activeClassName="active">Početna</NavLink>
      <NavLink to="/meals" activeClassName="active">Obroci</NavLink>  
    </div>
  );
};

export default Navbar;
