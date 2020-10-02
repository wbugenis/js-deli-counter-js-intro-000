var deliLine = [];

function takeANumber(line, name){
  deliLine.push(name);
  return("Welcome, " + name + ". You are number " + (line + 1) + " in line.");
}