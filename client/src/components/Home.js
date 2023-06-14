import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Preptime, sample_time } from "./Preptime";
import { FilterMoney, sample_money } from "./FilterMoney";
import { DropdownMenu, setOption } from "./Dropdown/DropdownMenu";

import Filter from "./Filter/Filter";
import Carousel from "./sliding/Carousel";

import { Sample } from "./sample";

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const updateImages = () => {
      const windowWidth = window.innerWidth;
      const imageUrls = [];
      const categories = ["food"];
      const widths = [
        "600",
        "500",
        "550",
        "500",
        "450",
        "400",
        "350",
        "300",
        "350",
        "300",
      ];

      for (let width of widths) {
        const imageUrl = `https://source.unsplash.com/${windowWidth}x${width}/?${categories}`;
        imageUrls.push(imageUrl);
      }

      setImages(imageUrls);
    };

    updateImages();
    window.addEventListener("resize", updateImages);
    return () => {
      window.removeEventListener("resize", updateImages);
    };
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Filter></Filter>
      <Carousel images={images} />
    </div>
  );
};

export default Home;
