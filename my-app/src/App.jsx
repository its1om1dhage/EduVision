import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Pages/Header'
import Bottomnav from './Pages/Bottomnav'
import Notes from './Pages/Notes'
import Upload from './Pages/Upload'
import Leaderboard from './Pages/Leaderboard'
import Chatbot from './Pages/Chatbot'
import Profile from './Pages/Profile'
import Login from './Pages/Login'
import "./Styles/App.css"

function Loader() {
  return (
    <div className="app-loader-bg">
      <div className="app-loader-text">LOADING RESOURCES WAIT...</div>
    </div>
  );
}

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  // Show loader only after login
  useEffect(() => {
    if (loggedIn) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 10000); // 10 seconds
      return () => clearTimeout(timer);
    }
  }, [loggedIn]);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <div className="aurora-bg">
        <div className="aurora-container"></div>
      </div>
      {/* Remove or comment out the old blob background if present */}
      {/* <div className="animated-bg-blobs">...</div> */}
      <Header />
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Bottomnav />
    </BrowserRouter>
  )
}

export default App
