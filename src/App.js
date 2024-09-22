import React from 'react'
import Navbar from './comp/Navbar'
import Searchbar from './comp/Searchbar'
import Weatherbody from './comp/Weatherbody'
import './App.css'

export default function App() {

  React.useEffect(()=>{
    fetchData("Bangalore");
  },[])

  const [searchVal,setSearchVal] = React.useState("");
  const [data,setData] = React.useState(null);


  async function fetchData(city){
    try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5678a39fd4798d464ef6feaf66ab336d`);
      const l = await response.json();
      setData(l);

    } catch(e) {
      console.log("Error Occured");
    }
  }


  function handleClick(e){
    e.preventDefault();
    fetchData(searchVal);
    setSearchVal('');
  }

  return(
    <>
      <Navbar heading={"Weather Display"}/>
      <Searchbar
        searchVal = {searchVal}
        setSearchVal = {setSearchVal}
        handleClick = {handleClick}
      />
      <Weatherbody 
        data = {data} 
      />
    </>
  )
}
