const { inverse } = require("chalk")
const axios = require('axios').default

/*
async function get_api(name){
    
    //let temperature
    //let min_temperature
    //let max_temperature
    //let nombre = name
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=ecfe3b501db6d812e96982c7951eff63`)
        .then((response)=>{
            
             return response.data.main.temp
             //min_temperature = response.data.main.temp_min
             //max_temperature = response.data.main.temp_max
        })
        .catch(err=>{
            console.log(err.response.data.message)
        })
    return 0
}
*/

const get_api = async (name) =>{
    try{
        const resPost = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=ecfe3b501db6d812e96982c7951eff63`)
        // clearTimeout(timeout);
        
        console.log(resPost.data.main.temp)
        return [resPost.data.main.temp, resPost.data.main.temp_min, resPost.data.main.temp_max]
    } catch (error){
        console.log(error)
    }
}

async function addCity(name,model){
    console.log(name)
    let array = await get_api(name)
    niuCity={cityName: name, cityTemp: array[0], minTemp:array[1], maxTemp:array[2]}
    console.log(name)
    model.push(niuCity)
    return model
}

async function updateCity(name,model){
    const modd=model
    //console.log(name)
    console.log(name)
    let array = await get_api(name)
    niuCity={cityName: name, cityTemp: array[0], minTemp:array[1], maxTemp:array[2]}
    for(var i = 0;i<modd.length;i++){
        if(modd[i].cityName===name){
            console.log(name)
            model[i]=niuCity
            break 
        }
    }
    //model[pos]=niuCity
    //console.log(name)
    return model
}

function removeCity(name,model){
    const modd=model
   // model.push(niuCity)
    for(var i = 0;i<modd.length;i++){
        if(modd[i].cityName===name){
            console.log(name)
            modd.splice(i,1)
            break 
        }
    }
    return model
}

module.exports = {
    get_api,
    addCity,
    updateCity,
    removeCity,
}