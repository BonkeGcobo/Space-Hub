import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

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
      <header className="header-nav">
        <img className="img-logo" src={logo} alt="A planet icon" style={{ width: '4rem', height: '4rem' }} />
        <div className="Logo-space">Space Travelers&apos; Hub</div>
        <ul className="navBar">
          {links.map((link) => (
            <li key={link.id} className="link">
              {link.text === 'My profile' && <span className="ml-8 text-gray-400 span-profile">|</span> }
              <NavLink to={link.path} activeClassName="active-link" className="tag" exact>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Navbar;
