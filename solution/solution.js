//https://stackoverflow.com/questions/63046010/how-can-i-import-json-files-in-nodejs-using-ecma-modules
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const members = require("../data/members.json");

//import members.json file
//import members from "../data/members.json";
//https://nodejs.org/api/esm.html#esm_json_modules

//For each member, split address into array using ',' as a delimeter
//Access the first index of the address array (this is always the state), trim the string to remove leading and trailing spaces
let memberStates = members.map((member) => member.address.split(",")[1].trim());

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

//For each member state, use the value of the state to increment the states object
//This counts each state
memberStates.forEach((state) => {
  states[state] = states[state] + 1;
});

console.log(states);
