function takeANumber(line, name) {
  return("Welcome, " + name + ". You are number " + (line.length + 1) + " in line.");
}

function nowServing(line) {
  var customer = line[0];
  line.shift();
  if(line > 0) {
    return customer;
  } else return ("There is nobody waiting to be served!");
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty.";
  } else {
    var people = "The line is currently:";
    for(let i = 0; i < line.length; i++) {
      people += " " + (i + 1) + ". " + line[i] + ",");
    }
    return people;
}
}