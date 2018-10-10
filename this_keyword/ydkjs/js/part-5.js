console.log('**part-5.js**');

/* Alternatives to that = this pattern */

/* use of bind or arrow functions */
{
    function foo() {
        // console.log(this);

        (function() {
            console.log(this);
        }.bind(this)());
    }

    const objA = {
        z: 900,
        foo
    };

    objA.foo();
}

{
    function foo() {
        // console.log(this);git

        (() => {
            console.log(this);
        })();
    }

    const objA = {
        z: 66,
        foo
    };

    objA.foo();
}
