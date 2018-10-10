console.log('**part-4.js**');

/* Lexical this */

{
    function foo() {
        return () => {
            console.log(this); //this will be window if regular function is used and not arrow function
        };
    }

    const obj1 = {
        a: 2
    };

    const obj2 = {
        a: 3
    };

    // foo.call(obj1)();
    const bar = foo.call(obj1);
    bar.call(obj2); //{a:2}
}

{
    function foo() {
        setTimeout(() => {
            // `this` here is lexically inherited from `foo()`
            console.log('used setTimeout: ', this.z);
        }, 100);
    }
    const obj = {
        z: 72
    };
    foo.call(obj); // 2
}
