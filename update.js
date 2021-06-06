const { inverse } = require("chalk")

const CToF = input=> ((Number(input))*(9/5)+32);
const FToC = input=> ((Number(input)-32)*(5/9));
const CToK = input=> (Number(input)+273.15);
const KToC = input=> (Number(input)-273.15);
const FToK = input=> (CToK(FToC(Number(input))));
const KToF = input=> (CToF(KToC(Number(input))));


function updateLeft(inVal,FromUnit,ToUnit, model){
    let outVal = 0
    //console.log(inVal)
    if(FromUnit==="Celsius"){
        if(ToUnit==="Celsius"){outVal=inVal}
        else if(ToUnit==="Fahrenheit"){outVal=CToF(inVal)}
        else if(ToUnit==="Kelvin"){outVal=CToK(inVal)}
    }
    else if(FromUnit==="Fahrenheit"){
        if(ToUnit==="Celsius"){outVal=FToC(inVal)}
        else if(ToUnit==="Fahrenheit"){outVal=inVal}
        else if(ToUnit==="Kelvin"){outVal=FToK(inVal)}
    }
    else if(FromUnit==="Kelvin"){
        if(ToUnit==="Celsius"){outVal=KToC(inVal)}
        else if(ToUnit==="Fahrenheit"){outVal=KToF(inVal)}
        else if(ToUnit==="Kelvin"){outVal=inVal}
    }
    return {
        ...model,
        LeftVal: Number(inVal),LeftUn: FromUnit,RightVal: outVal,RightUn: ToUnit
    }
}
function updateRight(inVal,FromUnit,ToUnit, model){
    let outVal = 0
    if(FromUnit==="Celsius"){
        if(ToUnit==="Celsius"){outVal=inVal}
        else if(ToUnit==="Fahrenheit"){outVal=CToF(inVal)}
        else if(ToUnit==="Kelvin"){outVal=CToK(inVal)}
    }
    else if(FromUnit==="Fahrenheit"){
        if(ToUnit==="Celsius"){outVal=FToC(inVal)}
        else if(ToUnit==="Fahrenheit"){outVal=inVal}
        else if(ToUnit==="Kelvin"){outVal=FToK(inVal)}
    }
    else if(FromUnit==="Kelvin"){
        if(ToUnit==="Celsius"){outVal=KToC(inVal)}
        else if(ToUnit==="Fahrenheit"){outVal=KToF(inVal)}
        else if(ToUnit==="Kelvin"){outVal=inVal}
    }
    return {
        ...model,
        LeftVal: outVal,LeftUn:ToUnit,RightVal: Number(inVal),RightUn: FromUnit
    }
}

module.exports = {
    updateRight,
    updateLeft
}