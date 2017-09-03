console.log('**call apply and bind keywod');

// THE CALL AND APPLY KEYWORD

function add(c, d) {
    return this.a + this.b + c + d;
}

var o = {a: 1, b: 3 };

//difference between call and apply is only that call accepts and argument list and apply while apply accepts
//a single array as an argument
console.log(add.call(o, 5, 7)); //16
console.log(add.apply(o, [10,8])); //22


// THE BIND METHOD
/*when you call the bind method and you pass in an object,
it creates a new function with the same body and scope as the original function but  
'this'  in the new function is permanently Bound
to the 1st argument of bind

Remember it doesn't bind the 2nd time

*/

function b() {
    return this.a;
}

var g = b.bind( {a: 'makikay' });
console.log( g() ); // makikay