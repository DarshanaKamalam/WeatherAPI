import React, { useState } from 'react'
import axios from 'axios'

export default function () {
    const [city,setcity]=useState("")
    const [weather,setweather]=useState("")
    const [temp,settemp]=useState("")
    const [desc,setdescription]=useState("")
    function handlecity(evt)
    {
        setcity(evt.target.value)
    }
    function getweather()
    {
        var weatherData=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cdfa48cb4a78314cc53f31c4b8a8fe54`)
        weatherData.then(function(success)
        {
            console.log(success.data)
            setweather(success.data.weather[0].main)
            setdescription(success.data.weather[0].description)
            settemp(success.data.main.temp)
            })
                                            
                   .catch(function(errmsg){console.log("Failed")})
    }
    
    return (
        <div>
            <div className="bg-black p-10">
                <div className="bg-green-400 p-10 border rounded-md border-black">
                    <h1 className="text-2xl font-bold">Weather Report</h1>
                    <p>I can give you a weather report about your city !</p>
                    <input onChange={handlecity} className="block mt-1 border border-black rounded-md p-1" type="text" placeholder="Enter your city name" />
                    <button onClick={getweather} className="mt-1 bg-black text-white border border-green-400 rounded-md p-1.5 " >Get Report</button>
                    <div className="mt-2">
                        <p className="font-medium" >Weather: {weather}</p>
                        <p className="font-medium">Temperature: {temp}</p>
                        <p className="font-medium">Description: {desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
