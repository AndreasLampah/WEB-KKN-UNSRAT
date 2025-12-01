import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="text-light text-center py-3 mt-auto"
      style={{ flexShrink: 0, backgroundColor:"#0d6efd" }}
    >
      <div className="container">
        <small>© {new Date().getFullYear()} Andreas Lampah. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
