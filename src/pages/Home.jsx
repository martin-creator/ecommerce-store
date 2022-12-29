import React from "react";
import { Announcement } from "../components/Announcement";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
