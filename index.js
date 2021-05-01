// Code your solution here
// We have an array of drivers with various information. We need to write functions
// using the `filter()` method so that PickMeUp Taxi service employees can easily
// query the data. Run the tests to see what conditions need to be met by each
// function _before_ you start writing JavaScript code.

// You'll be writing three functions:

// * `findMatching`- This function takes an array of drivers' names and a `string`
//   as arguments, and returns the matching list of drivers. The function should be
//   case insensitive.

function findMatching (driverNames, string){
    const foundDrivers = driverNames.filter(function(matchingName){
      return matchingName.toLowerCase() === string.toLowerCase();
    });

    return foundDrivers;
};
    
// `fuzzyMatch` - This function takes an array of drivers' names and a `string`
// as arguments for querying the array, and returns all drivers whose names begin
// with the provided letters.

function fuzzyMatch (driversNames, string){
    const stringLength = string.split("").length
    const firstLetterMatch = driversNames.filter (function (matchingName){const stringSlice = matchingName.split("").slice(0,stringLength).join("");
      return stringSlice === string

    })
    return firstLetterMatch;
};


// * `matchName` - This function takes an array of `driver` objects and a `string`
//   as arguments. Each `driver` object has two properties: `name` and `hometown`.
//   The function should return each element whose `name` property matches the
//   provided `string` argument.

function matchName (driversNames, string){
    const foundMatch = driversNames.filter(function(driverName){
        return driverName.name === string
    });
    return foundMatch;

};