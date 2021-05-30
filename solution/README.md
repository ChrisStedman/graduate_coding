# Dean Bakers solution

## Programming language

Javascript

## Project setup - Development environment

VSCode - v1.56.2
Node.js - v14.15.5
npm - v.7.5.4 (required for running programming from root directory)

## Run Program

#### In root directory - npm installation required

`npm start`

#### In solutions directory

`node ./solution.js`

## Output

After execution, output is saved in a file named 'solution.csv' in the solution directory.

Each line contains the abbreviation of the state followed by the number of times the state was counted in the members.json file. These data points are separated by a comma.

When opened in excel, this file displays state abbreviations in column A, with the corresponding count of the state in column B.

Note: Active & inactive members were counted as the instructions did not specify that inactive members should be excluded.

## Thoughts on the problem

I used Javascript to develop my solution because it is ideal for small programming challenges such as these. Javascript allows developers to easily import/export files and supports JSON data, facilitating rapid development.

States object was defined to allow for simple data validation and incrementation.

Separate responsibilities separated into functions to provide modularity and simple debugging/maintenance.

JSON data is imported and then members are iterated through individually. For each member, the address property is accessed, and the parts of the address are isolated by splitting it into an array using a comma as a delimeter. State information is always located after the first comma, so this index is accessed and leading/trailing spaces are removed using trim. The state information is then validated against the states object, and if valid, the state count is incremented. As the problem required that only the states were counted, no other action was taken to optimise the solution.

The states object is then used to create a CSV formatted string. I did look into installing a package to handle this in a more professional way, but as states object contains minimal information, I opted for a simple and lightweight approach. Each property (key) of the states object is iterated over and used to write the state and count in the correct format.

CSV formatted string is then written to a file in the solutions directory with the csv file extension.

I also created a test json file in a test directory to check validation was working correctly.

Overall, I tried to stick by the KISS method to create a simple and lightweight solution.

Thank you for the fun challenge!

## References

https://stackoverflow.com/questions/63046010/how-can-i-import-json-files-in-nodejs-using-ecma-modules
I hadn't worked in Javascript outside of web/mobile development (using React), so I didn't know what was required to import JSON files.
