import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-6 text-center bg-gray-50">
      <p className="mb-3">© 2025 Julia Nunes</p>
      <div className="flex justify-center gap-6">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-2xl hover:text-green-400 transition" />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub className="text-2xl hover:text-green-400 transition" />
        </a>
        <a href="mailto:seuemail@email.com">
          <FaEnvelope className="text-2xl hover:text-green-400 transition" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;




