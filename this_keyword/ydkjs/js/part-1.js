/* 
NOTES:
 If function has a this reference inside it, that this reference usually points to an object. But
 which object it points to depends on how the function was called
 */

function foo() {
    console.log(this.bar);
}

var bar = 'global';

var obj1 = {
    bar: 'obj1',
    foo: foo
};

var obj2 = {
    bar: 'obj2'
};

var obj3 = {
    foo: foo
};

foo(); //"global"
obj1.foo(); // "obj1"
foo.call(obj2); //"obj2"
obj3.foo(); //undefined
