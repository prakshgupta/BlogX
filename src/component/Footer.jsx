// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0c1846] text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} BlogX All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy" className="text-gray-400 hover:text-gray-300 mx-2">Privacy Policy</a>
          <a href="/terms" className="text-gray-400 hover:text-gray-300 mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
