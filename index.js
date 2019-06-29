function takeANumber (lineOfPeople,newName){
  lineOfPeople.push(newName)
  return `Welcome, ${newName}. You are number ${lineOfPeople.length} in line.` 
}
function nowServing(lineOfPeople) {
 if (lineOfPeople.length > 0) {
let nowServing = lineOfPeople.shift()
return `Currently serving ${nowServing}.`
}
  else {
  return "There is nobody waiting to be served!"
  }
}
function currentLine (lineOfPeople){
let message = `The line is currently: `
if (lineOfPeople.length > 0) { 
  
for (i=0; i<lineOfPeople.length; i++;){
  message.concat(`${i+1}. ${lineOfPeople[i]}`)
}
return message
  }
else {
  return "The line is currently empty."
}
}
}