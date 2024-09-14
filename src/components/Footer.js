import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} 大衆BAR BASK All Rights Reserved. |
        Site by{" "}
        <a href="https://bit.ly/chrisloven" target="_blank" rel="noreferrer">
          Chris Loven
        </a>{" "}
        | Designed with assets from{" "}
        <a href="https://www.freepik.com/" target="_blank" rel="noreferrer">
          Freepik
        </a>
      </p>
    </footer>
  );
};

export default Footer;
