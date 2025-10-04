export const Content = ({weatherData})=>{
    return (
        <>
            <div className="text-center bg-grey-500 p-6 rounded-lg gap-5">
                <div className="flex items-center justify-center my-4">
                    <img src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt="weather icon" className="w-xl h-xl"/>
                </div>
                <div>
                    <h2 className="text-4xl font-bold">{weatherData.cityName}, {weatherData.countryName}</h2>
                </div>

                <div>
                    <p className="text-5xl ml-4 mt-5 text-blue-600 font-bold ">{Math.floor(weatherData.temp)}&deg;C</p>
                    <p className="capitalize text-xl text-grey-300 mt-5 text-amber-500">{weatherData.description}</p>
                </div>
                <div className="flex justify-between space-x-20 mt-5">
                    <div>
                        <p className="text-xl text-amber-300 font-bold">humidity:</p>
                        <p className="text-grey-400 text-2xl">{weatherData.humidity}%</p>
                    </div>
                    
                    <div>
                    <p className="text-xl text-amber-300 font-bold">wind speed</p>
                    <p className="text-grey-400 text-2xl">{weatherData.wind}m/s</p>
                </div>
                </div>
            </div>
        </>
    )
}