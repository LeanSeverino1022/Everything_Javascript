function log(msg) { console.log(msg); }

show_ex_1 = 1;
show_ex_2 = 1;
show_ex_3 = 1;


if(show_ex_1) {

    function speak(greeting) {
        return function(name) {
            console.log( greeting + ' ' + name);
        }
    }

    //Hello undefined
    speak('Hello')(); 
    //Hello Grace
    speak('Hello')("Grace"); 

    // closures working...
    let sayHoy = speak("Hoy");
    //Hoy Marcus
    sayHoy("Marcus"); 
}

console.log("***EXAMPLE 2***");


//EXAMPLE # 2 

if(show_ex_2) {
	
    function sample(words) {

        function sample2() {
            console.log(words);
        }

        sample.sample2 = sample2;    
    }

    sample("I shouldn't be accessible but I am");
    sample.sample2();

}



//EXAMPLE 3
console.log("***EXAMPLE 3***");

if(show_ex_3) {
    function Person(name) {
        var _name = name; /*private member*/

        this.getName = function() {
        return _name;  
        };
    }

    var me = new Person("Kim");

    //undefined :( 
    console.log(me._name);

    //kim :)  
    //Because of closure I am able to access _name
    console.log(me.getName());

}












