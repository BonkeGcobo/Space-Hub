import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: 'Missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: 'My-Profile',
      text: 'My profile',
    },
  ];

  return (
    <>
      <header className="header">
        <div className="Logo-space">Logo-Section</div>
        <ul className="navBar">
          {links.map((link) => (
            <li key={link.id} className="link">
              <NavLink to={link.path} activeClassName="active-link" className="tag" exact>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Navbar;
