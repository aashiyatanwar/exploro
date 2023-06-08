import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Preptime } from "./Preptime";
import { FilterMoney} from "./FilterMoney"
import DropdownMenu from "./Dropdown/DropdownMenu";

import { Sample } from "./sample";
const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data");
      const jsonData = await response.json();

      setData(jsonData);
      setLoading(false);

      console.log("jsonData", jsonData);
    } catch (error) {
      console.log("Error:", error);
      setLoading(false);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("data", data);

  const diet = [];
  data.Sample.map((item) => {
    diet.push(item.Diet);
  });
  console.log("diet", diet);
  const uniqueData = diet.filter((item, index) => {
    // Check if the index of the current item is the first occurrence
    return diet.indexOf(item) === index;
  });

  console.log(uniqueData);

  return (
    <div>
      <Navbar></Navbar>
      <Preptime />
      <FilterMoney></FilterMoney>
      <DropdownMenu data={uniqueData} />
    </div>
  );
};

export default Home;
