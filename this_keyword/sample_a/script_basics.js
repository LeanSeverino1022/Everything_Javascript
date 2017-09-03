// NOTES:

//value of this

//when used in a function:  refers to object that owns the function
//when used in an object: is the object itself
//when used outside of a function or object, this refers to the global object 

// note_2: In Strict mode, functions invoked as functions(rather than methods) have 'this' value of undefined


console.log(this); //window object

//here, the global object is window therefore this(window).document is equal to document which also refers to window.document
console.log(this.document === document); // true

console.log( this === window ); // true

this.a = 99;
console.log(window.a); // 99

function getThis() {
    return this; // window, which is the global object that owns the function
}

console.log( getThis() === window ); // TRUE


var p = {
    prop: 100,
    f: function() {
        return this.prop;
    }
};

console.log(p.f()); // 100

var p = {prop: 999};

function independent() {
    return this.prop;
}

p.f = independent;

console.log(p.f()); // 999



