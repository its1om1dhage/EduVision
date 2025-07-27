import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Styles/Bottomnav.css';

const Bottomnav = () => {
  return (
    <div className="bottom-nav">
      <div className="nav-item">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          <img
            src="https://www.dropbox.com/scl/fi/g0x8rx4pctu0vfcubst9n/notes.png?rlkey=5d6vsqbmhnhdbhfromo95z4ag&st=saciios4&raw=1"
            alt="Notes"
          />
          <span>Notes</span>
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/upload" className={({ isActive }) => (isActive ? "active" : "")}>
          <img
            src="https://www.dropbox.com/scl/fi/hjenaii1aw749duzmhgp2/cloud_4085057.png?rlkey=zdk4qmcd96qoco3pitfaj7mpp&st=z6coun86&raw=1"
            alt="Upload"
          />
          <span>Upload</span>
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/leaderboard" className={({ isActive }) => (isActive ? "active" : "")}>
          <img
            src="https://www.dropbox.com/scl/fi/josdjaq1l1l6glsahxgue/trophy.png?rlkey=cqpncsek77etw8q9t1w59ka8n&st=4gaeyopv&raw=1"
            alt="Leaderboard"
          />
          <span>Leaderboard</span>
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/chatbot" className={({ isActive }) => (isActive ? "active" : "")}>
          <img
            src="https://www.dropbox.com/scl/fi/7ysdx7x1q936ayhhyg7ax/bot_1533105.png?rlkey=gla2mmvh16lcdcqg1cfbtbhc1&st=oxcrotk6&raw=1"
            alt="Chatbot"
          />
          <span>Chatbot</span>
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
          <img
            src="https://www.dropbox.com/scl/fi/ca3tmv62qoq1wnco7sdti/user_9507032.png?rlkey=honei62on3453d3m9buzfsons&st=xbzmdcfp&raw=1"
            alt="Profile"
          />
          <span>Profile</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Bottomnav;
