import { useState } from "react"

export const SearchBar = ({fetchWeather})=>{
    const [cityName, setCityName] = useState("");

    const handleKeyPress = (e)=>{
        if(e.key === 'Enter'){
            fetchWeather(cityName);
        }
    }
    return (
        <>
            <div className=" flex gap-4">
                <input 
                type="text"
                 placeholder="Enter the City name..." 
                 value={cityName}
                 onChange={(e)=>setCityName(e.target.value)}
                 onKeyPress={handleKeyPress}
                 className="flex-grow p-3 bg-green-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-bold" />
                <button
                 className="rounded bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-r-md transition duration-300"
                onClick={()=>fetchWeather(cityName)}
                 >search
                 </button>
            </div>
        </>
    )
}