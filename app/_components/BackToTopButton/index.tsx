"use client"; 

import React, { useEffect, useState } from "react";
import styles from "./index.module.css"

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", //autoもある
    });
  };

  return (
    <button
  onClick={scrollToTop}
  className={`${styles.backToTop} ${isVisible ? styles.visible : ""}`}
>
  Top
</button>
  );
};

export default BackToTopButton;
