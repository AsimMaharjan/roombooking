import React from "react"
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/default.css";
import { DateRangePicker } from "react-date-range";
function Search() {
    const [startDate,setStartDate]=useState(new Date());
    const [endDate,setEndDate]=useState(new Date());
    const selectionRange ={
        startDate:startDate,    
        endDate:endDate,
        key:"selection",

    };
function handleSelect(ranges){
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
}

    return (
        <div className="search">
            <DateRangePicker ranges={
                [selectionRange]} onChange={handleSelect}/>  
                <h2>
                    Number of guests
                    <FaUser/>
                </h2> 
                <input min={0}
                defaultValue={2}
                type="number"/>
                <button>Search</button>         
        </div>
    )
}

export default Search
