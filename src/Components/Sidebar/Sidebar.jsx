import React from "react";
import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

import sports from "../../assets/sports.png";
const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className={`side-link ${category==0?"active":""}`} onClick={(e)=>setCategory(0)}>
          <img src={home} alt="" />
          <p>Home</p>
        </div>
        <div className={`side-link ${category==20?"active":""}`} onClick={(e)=>setCategory(20)}>
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div className={`side-link ${category==2?"active":""}`} onClick={(e)=>{setCategory(2);e.preventDefault()}}>
          <img src={automobiles} alt="" />
          <p>Automobiles</p>
        </div>
        <div className={`side-link ${category==17?"active":""}`} onClick={(e)=>{setCategory(17);e.preventDefault()}}>
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>
        <div className={`side-link ${category==24?"active":""}`} onClick={(e)=>{setCategory(24);e.preventDefault()}}>
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div className={`side-link ${category==28?"active":""}`} onClick={(e)=>{setCategory(28);e.preventDefault()}}>
          <img src={tech} alt="" />
          <p>Technology</p>
        </div>
        <div className={`side-link ${category==10?"active":""}`} onClick={(e)=>{setCategory(10);e.preventDefault()}}>
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div className={`side-link ${category==22?"active":""}`} onClick={(e)=>{setCategory(22);e.preventDefault()}}>
          <img src={blogs} alt="" />
          <p>Blogs</p>
        </div>
        <div className={`side-link ${category==25?"active":""}`} onClick={(e)=>{setCategory(25);e.preventDefault()}}>
          <img src={news} alt="" />
          <p>News</p>
        </div>

        <hr />
        
      </div>
      <div className="subscribed-list">
        <h3>SUBSCRIBED</h3>
        <div className="side-link">
          <img src={jack} alt="" />
          <p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="" />
          <p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="" />
          <p>5-Minute Crafts</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
