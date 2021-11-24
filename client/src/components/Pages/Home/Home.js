import React from "react";
import Navbar from "./../../Navbar/Navbar";
import Sidebar from "./../../Sidebar/Sidebar";
import Feed from "./../../Feed/Feed";
import Rightbar from "./../../Rightbar/Rightbar";
import "./Home.scss";

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <div className='homeContainer'>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </React.Fragment>
  );
}

export default Home;
