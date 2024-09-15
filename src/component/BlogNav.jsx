import React from "react";


const BlogNav = () => {
  return (
    <div>
      <nav className="bg-[#0c1846] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-white text-2xl">
              BlogX
          </div>

          <div className="flex space-x-4">
            <a href="#home" className="text-white hover:text-gray-200">
              JavaScript
            </a>
            <a href="#about" className="text-white hover:text-gray-200">
              Data Structure
            </a>
            <a href="#services" className="text-white hover:text-gray-200">
              Algorithm
            </a>
            <a href="#contact" className="text-white hover:text-gray-200">
              Computer Network
            </a>
          </div>

          <div className="ml-4 rounded-full border-white border p-1.5">
            {/* Replace search input with UserIcon */}
            <img src='https://freesvg.org/img/1519501415.png' alt="" height={20} width={20} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default BlogNav;
