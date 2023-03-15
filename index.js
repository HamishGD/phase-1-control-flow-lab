function scuberGreetingForFeet(){
  // Write your code here!

  if (someNumber <= 400) {
    return 'This one is on me!';
  }

  else if (someNumber > 400 && someNumber < 2000){
    return 'That will be twenty bucks.';
  }

  else if (someNumber > 2000 && someNumber < 2500){
    return 'I will gladly take your thirty bucks.';
  }

  else if (someNumber > 2500){
    return 'No can do.';
  }

}

function ternaryCheckCity(){
  // Write your code here!

if (city === "NYC") {
  return "ok, sounds good.";
}

else if (city === "Pittsburgh") {
  return 'No go.';
}

}

function switchOnCharmFromTip(){
  // Write your code here!

  if (tip === "generous") {
    return 'Thank you so much.';
  }

  else if (tip === "not as generous") {
    return 'Thank you.';
  }

  else if (tip === "if anything else") {
    return 'Bye.';
  }
}