import React from 'react'
import "../Styles/Header.css"

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="menu">
          <input type="checkbox" id="menuCheckbox" />
          <label htmlFor="menuCheckbox" id="menuButton">
            <span className="bar top"></span>
            <span className="bar middle"></span>
            <span className="bar bottom"></span>
          </label>
          <div id="menuContainer">
            <div className="Upload"><a href="#">Upload</a></div>
            <div className="Leaderboard"><a href="#">Leaderboard</a></div>
            <div className="Chatbot"><a href="#">Chatbot</a></div>
            <div className="Profile"><a href="#">Profile</a></div>
            <div className="ModeToggle"><a href="#">Change display mode</a></div>
          </div>
        </div>
        <div className="coins">
          <img
            src="https://www.dropbox.com/scl/fi/j9sm0rht9gcsw4en821n6/money_3213595.png?rlkey=cj6ejheq07sqv62fd97fhy7e8&st=dxlc5fdh&raw=1"
            alt="Coins Icon"
          />
          <span id="coinsCount" style={{ marginLeft: '10px' }}>0</span>
        </div>
        <img
          src="https://www.dropbox.com/scl/fi/r8wycdi1leiuaabijtx7r/EduVision_20250224_132351_0000.png?rlkey=ibhctiduwsmzh58tmqeu8mtop&st=37wlt6jw&raw=1"
          alt="EduVision Logo"
          className="logo"
          style={{ width: '70px', height: '70px' }}
        />
      </div>
    </>
  )
}

export default Header
