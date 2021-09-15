/*Scenario: Create a program that will get the users' state (2 letters, capitalized eg. NE) and current outside temperature (F). Then it will give them a personalized recommendation about clothing they should wear. These messages are stored in an array. Each message is an item in the array. You will create two versions of the program - one using if/else statement(s) and one using switch statement(s). Put each program on a different form in the same project. 
Requirements
Name the first program form ifElse. Use if/else statements - no switch. 
Name the second program form switch, Use a switch statement. 
Use variables to hold these data: 
> the users' first name
> the users' state (2 letters)
> the users' temperature (number) in Fahrenheit
> an array that is holding all of the messages
All variable names must be camelcase (likeThis) and reflect what they are holding.
All messages are stored in an array named 'messages', one per location. 
All output must be via console, not alerts, using template literals. 
All output should be nicely formatted and addressed to the user:
eg. Mary, blah blah blah.
Below are the messages to output based on the state and temperature received from the user. Messages cannot be hard-coded (that is, typed into the program where needed for output).

State	Temperature	Message
NE	under 32 degrees	wear a warm coat, hat, scarf and gloves.
NE	between 32 and 50 degrees	wear a warm coat but you won't need a hat, scarf or gloves.
FL	between 32 and 50 degrees	wear your warmest coat, a warm hat, a scarf, and warm gloves.
FL	between 50 and 70	wear a warm coat, hat and gloves. Maybe a scarf too.
All code must be indented properly. 
> not all on the left margin
> blank line between 'blocks' of code (lines of code that are accomplishing some activity)
Concise, brief comments are used before blocks of code that explain in plain English what the block of code does at the level that someone who doesn't know how to code could understand. 
Program master (and branche(s)) must be in the GitHub repository. Put repository link on top of Word doc. 

Download this appstudio project DebugAssign2.appstudio.zip  Download DebugAssign2.appstudio.zipand unzip it. Open it in appStudio. Your job is to debug it so that it works, and document each bug you fixed on the Word doc (just copy the line of code and add a sentance explaining the problem. Then resave the file, rezip it so you can submit it. No repository needed. 
*/
let state = prompt("What is your state's two letter abbreviation?")
let temp = Number(prompt("What is the current outside temperature in farenheit?"))
let name = prompt("What is your name?")
let messages = ["Wear a warm coat, hat, scarf and gloves.","Wear a warm coat but you won't need a hat, scarf or gloves.","Wear your warmest coat, a warm hat, a scarf, and warm gloves.","Wear a warm coat, hat and gloves. Maybe a scarf too."]

if (temp < 32)
  console.log(`Hello, ${name}! ${messages[0]}`)
  
else if (state == "NE" && temp >= 32 && temp <= 50)
  console.log(`Hello, ${name}! ${messages[1]}`)
  
else if (state == "FL" && temp >= 32 && temp <= 50)
  console.log(`Hello, ${name}! ${messages[2]}`)
  
else if (state == "FL" && temp >= 50 && temp <= 70)
  console.log(`Hello, ${name}! ${messages[3]}`)