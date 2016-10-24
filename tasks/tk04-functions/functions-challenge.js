/*
 * TASK :
 * 1. create a function named printDensity() that accept three arguments :
 * - country
 * - area
 * - population
 * The function must :
 * - create an internal var named "density" which calculates the density of population per km2
 * - log to the console the phrase "XXX has a density of XXX/km2"

 * 2. Use the function to print out the density of the third country contained in the given array of objects using the appropriate syntaxe
 *
 * 3. Create a function named betterPrintDensity() which provide the same functionality of printDensity() but using just one argument (currentCountry)
 * HINT : remember that you can pass any type of values as argument in a function
 *
 * 4. Use the new function to print out the density of each element in the array
 * HINT : you must call the function three times
 */

var countries = [
    {
        country: "Switzerland",
        area: 41285,
        population: 8341000
    },
    {
        country: "France",
        area: 643801,
        population: 66736000
    },
    {
        country: "Italy",
        area: 301338,
        population: 60674003
    }
];

//1. task
function printDensity( /* Code here */ ) {
    var density = /* Code here */ ;
    console.log(country + " has a density of " + density + "/km2");
}

//2. Task
printDensity( /* Code here */ );

//3. Task
function betterPrintDensity(currentCountry) {
    /* Code here */
}

//4. Task
betterPrintDensity( /* Code here */ );
betterPrintDensity( /* Code here */ );
betterPrintDensity( /* Code here */ );
