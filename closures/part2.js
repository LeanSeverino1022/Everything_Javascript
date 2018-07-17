


function buildFunctions() {

    let arr = [];

    for (var i = 0; i < 3; i++) {

        arr.push(
            function () {
                console.log(i);
            }
        )
    }

    return arr;
}

let fs = buildFunctions();

fs[0](); //3
fs[1](); //3
fs[2](); //3



//    LETS MAKE THIS WORK THE WAY WE WWANT IT TO WORK
function buildFunctions2() {

    let arr = [];

    for (var i = 0; i < 3; i++) {

        arr.push(
            (function (j) {
                return function () {
                    console.log(j);
                }
            }(i))
        )
    }

    return arr;
}

let fs2 = buildFunctions2();

fs2[0](); //3
fs2[1](); //3
fs2[2](); //3








