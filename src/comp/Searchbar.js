import React from 'react'
import './Searchbar.css'

export default function Searchbar(props) {

    function handleChange(e){
        props.setSearchVal(e.target.value)
    }

    return (
        <div className="searchdiv"> 
            <form onSubmit={props.handleClick}>
                <input
                    type="text"
                    value={props.searchVal}
                    onChange={handleChange}
                    placeholder="Enter City"
                />
                <button type="submit" >Search</button>
            </form>
        </div>
    );
}
