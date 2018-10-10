/* HARD binding */
console.log('**part-3.js**');

{
    function foo() {
        console.log(this.a);
    }

    var bar = function() {
        foo.call(obj); /* hard bind */
    };

    var obj = {
        a: 500
    };

    bar(); //500
    bar.call(window); // 500 , hard bound, cannot be overriden
}
