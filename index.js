// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = 100;
let weatherStatus = "clear";

// Write code to generate the LC04 report here:
let dashedLine = "-------------------------------------"
console.log(dashedLine + "\n" + 
  "> LC04 - LAUNCH CHECKLIST" + "\n" +
  dashedLine)
console.log(date + "\n" +
  time + "\n" +
  "\n" + dashedLine) 
console.log("> ASTRONAUT INFO" + "\n" +
dashedLine)
console.log(("* count: " +  astronautCount + "\n" +
  "* status: " + astronautStatus) + "\n" +
  "\n" + dashedLine)
console.log("> FUEL DATA" + "\n" +
dashedLine)
console.log(("* Fuel temp celsius: " + fuelTempCelsius + "\n" +
  "* Fuel level: " + fuelLevel + "%") + "\n" +
  "\n" + dashedLine)
console.log("> MASS DATA" + "\n" +
dashedLine)
console.log("* Crew Mass: " + crewMassKg + " kg" + "\n" +
  "* Fuel mass: " + fuelMassKg + " kg" + "\n" +
  "* Shuttle mass: " + shuttleMassKg + " kg" + "\n" +
  "* Total mass: " + totalMassKg + " kg" + "\n" +
  "\n" + dashedLine)
console.log("> FLIGHT PLAN" + "\n" +
dashedLine)
console.log("* weather: " + weatherStatus + "\n" +
"\n" + dashedLine)
console.log ("> OVERALL STATUS" + "\n" +
dashedLine)
console.log(" * Clear for takeoff: YES")
// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.