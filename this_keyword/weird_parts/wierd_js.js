if( 0 )
{
    var p = {
        prop_a: 100,
        prop_b: 200,
        set_a: function() {
            console.log(this); // p object
            this.prop_a = 5;

            function set_b() {
                //weird because this function is inside set_a function that is owned by p object
                //this in set_a refers to p object, but this in set_b refers to the global object
            
                console.log(this); // window object
                this.prop_b = 2; // creates a window object property (window.prop_b)
            }      

            set_b(); 
                
            console.log( this.prop_a ); // 5
            console.log( this.prop_b ); // still 200
        }
    };

    p.set_a();
    console.log( prop_b ); // 2
}


// the fix: use of apply or call
if( 1 )
{
    var p = {
        prop_a: 100,
        prop_b: 200,
        set_a: function() {
            console.log(this); // p object
            this.prop_a = 5;

            function set_b() {
                //weird because this function is inside set_a function that is owned by p object
                //this in set_a refers to p object, but this in set_b refers to the global object
            
                console.log(this); // window object
                this.prop_b = 2; // creates a window object property (window.prop_b)
            }      

            set_b.apply(p); 
                
            console.log( this.prop_a ); // 5
            console.log( this.prop_b ); // 2
        }
    };

    p.set_a();
}

// fix 2: use of arrow function: Remember use only arrow function with function set_b and not set_a
// if you use arrow function with set_a, this refers to the global object

// just change function set_b() {...} to set_b = () => {... }

// other fix: you can use the bind method and the common that = this (dont depend on this too much though, TRY TO UNDERSTAND HOW IT WORKS AND NOT RELY ON EASY QUICK FIX WITHOUT UNDERSTANDING IT, BECAUSE LATER ON, YOU WONT BE ABLE TO DEBUG EASILY CODE(NOT YOURS) THAT USES THIS IN DIFFERENT WAYS. IF YOU THINK SMALL DONT LEARN DEEP ABOUT THIS KEYWORD BUT IF YOU WANT TO BE GREAT AND FLEXIBLE, UNDERSTAND IT WELL)