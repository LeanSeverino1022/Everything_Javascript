// USE WITH THE ARROW FUNCTION:  With arrow functions 'this' is bound to the enclosing scope
//at creation phase and CANNOT BE CHANGED (call, apply, and bind -> no effect)


var o = {
    traditionalFunc: function() {
        console.log( 'traditionalFunc this === o? ',this === o );
    },
    arrowFunc: () => {
        console.log( 'arrowFunc this === o?', this === 0 );
        console.log( 'arrowFunc this === window?', this === window );
    }
};

o.traditionalFunc() // true (this === o)
o.arrowFunc();  // false (this === o)
                // true (this === window)

//the arrow function attached to o was created in the scope of window

// My own understanding: with arrow functions, 'this' refers to what execution scope the function that calls this was created

//in the example above the global object window created the arrowFunc function 
//the arrow func was CREATED in the scope of window and RUN in the scope of o

var obj2 = {
    arrowFunc: () => {
        console.log( 'arrowFunc this === o?', this === 0 );
        console.log( 'arrowFunc this === window?', this === window );
    }
};



