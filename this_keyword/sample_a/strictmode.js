console.log("**strictmode.js**");
// NOTES: SEE Javascript the definitive guide page 111


// NOTE_1 : In strict mode, functions invoked as functions (rather than methods) have 'this' value of undefined


//non-strict mode
var nonStrictMode = (function(){
     console.log("'this' is " + this);
}());

//strict mode
var strictMode = (function(){
   
    "use strict";
     console.log("'this' is " + this);
}());
