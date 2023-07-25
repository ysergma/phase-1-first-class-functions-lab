// Code your solution in this file!
const returnFirstTwoDrivers=(array)=>{
return array.slice(0,2);

}

const returnLastTwoDrivers=(array)=>{
    return array.slice(-2);
    
    }
    


var selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier=function(integer){
return (fare)=>{
return fare * integer;
}
}


const fareDoubler=function(fare){
    return fare*2
}

const fareTripler=function(fare){
    return fare*3
}

const selectDifferentDrivers=function(drivers,condition){
    if(condition==returnFirstTwoDrivers){
        return drivers.slice(0,2);
    }
    else if(condition==returnLastTwoDrivers){
        return drivers.slice(-2);
    }

}
//returnFirstTwoDrivers(["one","two","three"])

