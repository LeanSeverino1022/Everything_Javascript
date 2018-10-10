console.log('**part-2.js**');

/* 
  common misconception about the meaning of this is
that it somehow refers to the function’s scope. 
*/

/* test 1 */
{
    function foo() {
        const a = 2;
        this.bar();
    }
    function bar() {
        console.log(this.a);
    }
    foo(); //ReferenceError: a is not defined
}

/* test 2 */
{
    function foo() {
        console.log(this.a);
    }
    const obj = {
        a: 2,
        foo: foo
    };
    const bar = obj.foo; // function reference/alias!
    const a = 'oops, global'; // `a` also property on global object
    bar(); // "oops, global"
    obj.foo(); // 2
}

/* test 3 Explicit binding -  stating what the this to be,*/
{
    function foo() {
        console.log(this.a);
    }
    const obj = {
        a: 10
    };

    obj2 = {
        a: 20
    };
    foo.call(obj); // 2  force 'this' to be obj.
}
