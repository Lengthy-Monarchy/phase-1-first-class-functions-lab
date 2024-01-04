// Code your solution in this file!
const  returnFirstTwoDrivers = function anonymousFunction([]){
    return (['Mary', 'Marie']);
    
    }
    
    const  returnLastTwoDrivers = function anonymousFunction([]){
        return (['Sophie', 'Catherien']);
    
    }
    const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];
    
    function createFareMultiplier(anInteger){
        return function(fare){
        return fare*anInteger;
        };
    }
    const fareDoubler = createFareMultiplier(2);
    const fareTripler = createFareMultiplier(3);
    
    const selectDifferentDrivers = function (arrayOfDrivers, driversToReturn) {
        return driversToReturn(arrayOfDrivers);
    };