import React from "react";
import { useEffect, useState } from "react";
import './App.css';

import SearchIcon from './search.svg'
import { CountryCard } from "./CountryCard";


const App =()=> {
  
    const [countries,setCountries]=useState([]);
    const [searchTerm, setSearchTerm]=useState("");
    useEffect(()=>{
      all_countries();
     
    },[]);
    const searchcountries=async(name)=>{
        const response=await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data= await response.json();
        console.log(data);
        if (data) {
            setCountries(data);
          } else {
            setCountries([]); // Set an empty array if data is undefined
          }
    }
    const all_countries=async()=>{
      const response=await fetch('https://restcountries.com/v3.1/all');
      const data= await response.json();
      
      if (data) {
          setCountries(data);
        } else {
          setCountries([]); // Set an empty array if data is undefined
        }
  }
  
    return (
        <div className="app">
            <h1>Find more about the country that you want</h1>
            <div className="search">
                <input placeholder="Search for countries"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}/>
                <img 
                src={SearchIcon}
                alt="search"
                onClick={()=>searchcountries(searchTerm)}
                />
            </div>
            {countries?.length > 0 ? (
        <div className="container">
          {countries.map((country) => (
            <CountryCard country={country} key={country.name.common} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No countries found</h2>
        </div>
      )}
    </div>
    );
}
export default App;
