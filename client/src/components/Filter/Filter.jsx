import React, { useEffect, useState } from 'react';
import ReactDOM from 'react'
import './Filter.css'
import { Sample } from '../sample';
import { Preptime } from '../Preptime';
import { FilterMoney } from '../FilterMoney';
import {setOption } from '../Dropdown/DropdownMenu';
import { sample_time } from '../Preptime';
import { sample_money } from '../FilterMoney';
import { DropdownMenu } from '../Dropdown/DropdownMenu';
const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetchData();

    },[]);

    useEffect(() => {
      console.log("sample Time" , sample_time)
    },)
  
    useEffect(() => {
      console.log("sample Money" , sample_money)
    },)

    useEffect(() => {
      const sample_diet = Sample.filter((item)=>{return item.Diet === setOption})
      console.log("option" , setOption)
      console.log("dietttt" ,sample_diet)
    },[]);
  
  

  
    const fetchData= async ()=>{
        try{
            const response =await fetch("http://localhost:5000/api/data");
            const jsonData =await response.json();

            setData(jsonData);
            setLoading(false);
            
        }
        catch(error){
            console.log('error:',error);
            setLoading(false);
        }
    }
    if(loading){
        return <div> Loading...</div>
    }
    const diet =[];
    data.Sample.map((item)=>{
        diet.push(item.Diet);
    })

    const uniqueData =diet.filter((item,index)=>{
        return diet.indexOf(item)===index;
    })

//console.log(uniqueData)

  return (
    <div>
      <button onClick={handleClick}>Filter</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Filter</h2>
           <ul>
            <li> 
                <Preptime />
            </li>
            <li>
                <FilterMoney />
            </li>

          <li>
            <DropdownMenu data={uniqueData} />
          </li>
            </ul>
            <button onClick={handleClick}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;