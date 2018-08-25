// Replace Function Expressions with arrow functions in the code:

/*

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

*/

//The confirm() method returns true if the user clicked "OK", and false otherwise.
let ask = (question, yes, no ) => confirm(question) ? yes() : no();

ask( 
  "Do you agree?", 
  () => alert("You agreed"), 
  () => alert("Cancelled Execution") 
);