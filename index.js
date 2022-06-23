const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function (drivers){
  return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier) {
  return function (fare) {
    return fareMultiplier * fare;
  };
}
const fareDoubler = function (fare) {
  return fare * 2;
}
const fareTripler = function (fare){
  return fare * 3;
}
function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
  return returnFirstTwoDrivers(arrayOfDrivers)
  }
  








/* Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier) {
  return function (fare) {
    return fareMultiplier * fare;
  };
}
const fareDoubler = function (fare) {
  return fare * 2;
};
const fareTripler = function (fare) {
  return fare * 3;
};

function selectDifferentDrivers(arrayOfDrivers, drivers) {
  console.log(arrayOfDrivers, drivers);
  const newDrivers = drivers(arrayOfDrivers);
  console.log(newDrivers);
  return newDrivers;
}*/
