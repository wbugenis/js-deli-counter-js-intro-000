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