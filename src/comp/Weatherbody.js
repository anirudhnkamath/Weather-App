import React from 'react'
import './Weatherbody.css'

export default function Weatherbody(props) {
    
    console.log(props);
    

    if(props.data == null){
        return(
            <>
            </>
        )
    }

    function toTitleCase(str) {
        return str
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      }

    return (
        <div className='weatherwrapper'>
            <div className='weathercontainer'>
                <div className='place'>
                    <p className='city'>{props.data.name},</p>
                    <p className='country'>{props.data.sys.country}</p>
                </div>
                <h1 className='temp'>{Math.round(props.data.main.temp - 273)}° C</h1>
                <p className='clouds'>{toTitleCase(props.data.weather[0].description)}</p>
                <p className='wind'> Wind: {props.data.wind.speed} m/s</p>
            </div>
        </div>
    )
}
