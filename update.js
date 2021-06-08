const { inverse } = require("chalk")

function get_api(name,model){
    //console.log(name)
    console.log(name)
    const axios = require('axios')
    console.log(name)
    let temperature
    let min_temperature
    let max_temperature
    //let nombre = name
    console.log(name)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=ecfe3b501db6d812e96982c7951eff63`)
        .then((response)=>{
            //console.log(name)
            return{
                ...model,
                cityName:name, cityTemp:response.data.main.temp, maxTemp:response.data.main.temp_min, minTemp:response.data.main.temp_max
        
            }
            // temperature = response.data.main.temp
            // min_temperature = response.data.main.temp_min
            // max_temperature = response.data.main.temp_max
        })
        .catch(err=>{
            console.log(err.response.data.message)
        })
    
}
function addCity(name,model){
    console.log(name)
    niuCity={cityName: name, cityTemp: 50, minTemp:25, maxTemp:75,}
    console.log(name)
    model.push(niuCity)
    return model
}
function updateCity(name,model){
    console.log(name)
    niuCity={cityName: name, cityTemp: 50, minTemp:25, maxTemp:75,}
    console.log(name)
    model.push(niuCity)
    return model
}
function removeCity(i,model){
    console.log(i)
    console.log(i)
    model.push(niuCity)
    return model
}
module.exports = {
    get_api,
    addCity,
    updateCity,
    removeCity
}