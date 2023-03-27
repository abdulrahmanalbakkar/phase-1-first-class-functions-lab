// Code your solution in this file!
function returnFirstTwoDrivers(arr){
    return [arr[0], arr[1]]
}
function returnLastTwoDrivers(arr){
    return [arr[arr.length-2],arr[arr.length-1]]
}
const  selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(){
    const fareMultiplier = function(number){return number * number}
    return fareMultiplier
}
function fareDoubler(number){
    return number * 2
}
function fareTripler(number){
    return number * 3
}
function selectDifferentDrivers(arrayOfDrivers, fn){
    if(fn === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arrayOfDrivers)
    }else{
        return returnLastTwoDrivers(arrayOfDrivers)
    }
}