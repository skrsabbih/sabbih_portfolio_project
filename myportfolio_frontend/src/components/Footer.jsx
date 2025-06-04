import React, { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/footers")
      .then((res) => {
        setFooter(res.data.data[0]);
      })
      .catch((err) => {
        console.error("Failed to fetch footer", err);
      });
  }, []);

  if (!footer) return null;

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-xl font-semibold mb-4">{footer.name}</h3>

        {/* Optional: Navigation Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/skrsabbih/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-2xl hover:text-white"></i>
          </a>
          <a href="https://www.linkedin.com/in/skrsabbih/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-2xl hover:text-white"></i>
          </a>
          <a
            href="https://wa.me/8801764280085"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <i className="fab fa-whatsapp text-2xl"></i>
          </a>
        </div>

        {/* Phone number (if needed visually) */}
        <div className="mb-2 text-sm">
          <p>Phone: +8801764-280085</p>
        </div>

        <p className="text-sm">{footer?.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
