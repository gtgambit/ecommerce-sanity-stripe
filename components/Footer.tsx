import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <p>2022 JSM Headphones. All Right reserved</p>
      <p className="icons">
        <AiFillInstagram /> <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
