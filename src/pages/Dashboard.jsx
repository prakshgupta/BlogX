import React from "react";
import BlogNav from "../component/BlogNav";
import Posts from "../component/Post";
import Footer from "../component/Footer";


const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <BlogNav />
      <Posts/>
      <Footer/>
    </div>
  );
};

export default Dashboard;
