// import React from 'react'
// import "./Navbar.css"
// import menu_icon from "../../assets/menu.png"
// import logo from "../../assets/logo.png"
// import search_icon from "../../assets/search.png"
// import upload_icon from "../../assets/upload.png"
// import more_icon from "../../assets/more.png"
// import notification_icon from "../../assets/notification.png"
// import profile_icon from "../../assets/jack.png"
// import { Link } from "react-router-dom";
// const Navbar = ({setSidebar}) => {
//     return (
//       <nav className='flex-div'>
//           <div className='nav-left flex-div'>
//               <img 
//                   className='menu-icon' 
//                   onClick={(e) => {setSidebar(prev => !prev);e.preventDefault()}} 
//                   src={menu_icon} 
//               />
//               <Link to="/"><img className="logo" src={logo} alt="Logo"/></Link>
//           </div>
//           <div className='nav-middle flex-div'>
//               <div className="search-box flex-div">
//                   <input type="text" placeholder='Search'/>
//                   <img className="search" src={search_icon} alt="Search"/>
//               </div>
//           </div>
  
//           <div className="nav-right flex-div">
//               <img src={upload_icon} alt="Upload"/>
//               <img src={more_icon} alt="More"/>
//               <img src={notification_icon} alt="Notifications"/>
//               <img src={profile_icon} className='user-icon' alt="Profile"/>
//           </div>
//       </nav>
//     )
//   }
  

// export default Navbar


import "./Navbar.css"
import menu_icon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search.png"
import upload_icon from "../../assets/upload.png"
import more_icon from "../../assets/more.png"
import notification_icon from "../../assets/notification.png"
import profile_icon from "../../assets/jack.png"
import { Link } from "react-router-dom";
import React, { useState } from 'react';
// ...other imports

const Navbar = ({ setSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      if (searchQuery.trim()) {
        // Redirect to search results page
        window.location.href = `/search/${searchQuery}`;
      }
    }
  };

  return (
    <nav className='flex-div'>
      {/* Left */}
      <div className='nav-left flex-div'>
        <img 
          className='menu-icon' 
          onClick={(e) => { setSidebar(prev => !prev); e.preventDefault(); }} 
          src={menu_icon} 
          alt="menu" 
        />
        <Link to="/"><img className="logo" src={logo} alt="Logo" /></Link>
      </div>

      {/* Middle */}
      <div className='nav-middle flex-div'>
        <div className="search-box flex-div">
          <input
            type="text"
            placeholder='Search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
          <img
            className="search"
            src={search_icon}
            alt="Search"
            onClick={handleSearch}
          />
        </div>
      </div>

      {/* Right */}
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="Upload" />
        <img src={more_icon} alt="More" />
        <img src={notification_icon} alt="Notifications" />
        <img src={profile_icon} className='user-icon' alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;

