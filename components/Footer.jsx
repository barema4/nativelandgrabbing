import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  const copyrightSign = '\u00A9';
  return (
    <div className="footer-container">
      <p>{`${copyrightSign} 2020-${new Date().getFullYear()} CrystalSolutions, Inc. All rights reserved`}</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer;
