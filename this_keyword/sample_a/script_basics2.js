var sound = "Oink2"; // globalobject.sound = Oink2

    var Cat = {
        sound: "Meow",
        say: function() { 
            console.log(this.sound); 
        }
    }
    // When a function is called as a property on a parent object, 'this' refers to the owner of that function.
    // this(Cat).sound = meow!
    Cat.say(); 

    var Dog = Cat.say;
    //Dog variable holds a reference to the function. Remember we are not running the function but I'm just passing the
    //reference to the function.  It works like var Dog = function() { console.log(this.sound) }

    //Remember that 'this' always refers to the Object that the containing function is a mthod of
    //So the function Dog is bound to window object / global object. 
 
    //'this' now refers to the “owner” of the function we're executing. 

    //so this keyword refers to the global object which contains the Dog function
   
    Dog();  //'this' is the ownerof the function which is window. window.dog exists if you check
    //window.sound is equals to oink2

/*    BIND: The bind() method creates a new function that, when called, has its this keyword set to the provided value, 
    with a given sequence of arguments preceding any provided when the new function is called.*/

    //set this keyword of Dog() to Cat
    var DogBind = Dog.bind(Cat);

    DogBind(); //Meow!