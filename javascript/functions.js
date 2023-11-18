var a = 10
var b = 20
a+b
30

keyword nameoffunction(parameter){
    return output
}

function add(a,b){
    return a+b
}

add(1,2)
3

add(5,2424)
2429

add("Hii","JavaScript")
'HiiJavaScript'

add(1,2,3)
3

//es5
function add(a,b,c){
    return a+b+c
}

add(2,5,6)
13
add(2,5)
NaN

//es6 arrow function
let add = (a,b) =>  {return a+b}
add(1,2)
3

///rest es6
let add2 = (...args) =>  {
    console.log(args)
}

add(1,2,3)
[1,2,3]

add(4,5,6,7)
[4,5,6,7]