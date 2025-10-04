import { useState } from 'react'

import './App.css'
import { SearchBar } from './components/SearchBar'
import { Content } from './components/Content'

function App() {
  const [weatherDetails, setWeatherDetails] = useState(false);
  
  const fetchWeather = async (cityName)=>{
      try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${import.meta.env.VITE_API_KEY}&units=metric`

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setWeatherDetails({
          cityName: data.name,
          countryName: data.sys.country,
          temp: data.main.temp,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          description: data.weather[0].description,
          icon: data.weather[0].icon
        })

        console.log(weatherDetails);
          
      }
      catch(error){
        console.log(error.message);       
      }
  }


  return (
    <>
      <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center text-white p-4">
          <div className="w-full max-w-md bg-green-900 rounded shadow-lg p-6">
              <SearchBar fetchWeather={fetchWeather}/>
              {weatherDetails &&
              <Content weatherData={weatherDetails}/>
              }

              {!weatherDetails && <div className='mt-10 p-5 flex justify-center items-center'>
                <p className='text-2xl text-slate-300'>Please enter city name to get the weather details...</p>
              </div>}
          </div>
      </div>
    </>
  )
}

export default App
