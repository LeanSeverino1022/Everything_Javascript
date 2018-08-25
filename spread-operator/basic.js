
//  spread operator "spreads" the values of an array into different arguments

function foo(one, two, three) {
    console.log(three);
}

var arr = [0,1,2];

//this also accepts arguments in an array trick
foo.apply(null, arr); // 2

//but using spread operator is also an easy way of doing it
foo(...arr); //2






