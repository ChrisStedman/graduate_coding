// Importing required modules and json data
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const members = require("../data/members.json");
var fs = require("fs");

// States Javascript object.
// Initialising states to 0 allows for simple validation and incrementation
let states = {
  NSW: 0,
  VIC: 0,
  QLD: 0,
  ACT: 0,
  NT: 0,
  SA: 0,
  WA: 0,
  TAS: 0,
};

// Coordinates exectution of program
const run = () => {
  determineStateCounts();
  const CSVFormattedString = objectToCSVString();
  outputCSVFile(CSVFormattedString);
};

// For each member, split address into array using ',' as a delimeter
// Access the first index of the address array (this is always the state), trim the string to remove leading and trailing spaces
// The state is then used to increment the count of the states object
const determineStateCounts = () => {
  members.forEach((member) => {
    const state = member.address.split(",")[1].trim();

    // Basic validation to ensure only the states defined in the states object are incremented
    // Any other values will be ignored
    if (states[state] != undefined) {
      states[state] = states[state] + 1;
    }
  });
};

// Create string formatted as csv
const objectToCSVString = () => {
  let CSVFormattedString = "";

  // Iterates over each key (state property within states object)
  // Used to retrieve state counts from states object and is inserted into CSVFormatted String
  Object.keys(states).forEach((key) => {
    CSVFormattedString += `${key.toString()}, ${states[key]}\n`;
  });

  return CSVFormattedString;
};

//Write solution to csv file
const outputCSVFile = (CSVFormattedString) => {
  fs.writeFile("solution.csv", CSVFormattedString, (error) => {
    if (error) {
      console.log(error);
    }
  });
};

run();
