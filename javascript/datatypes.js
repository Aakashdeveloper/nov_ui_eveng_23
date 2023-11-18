es5 > Ecma Script 5
es6 > Ecma Script 6


String > "Hii" 'hey' `Hello` "test" '10' "true"
Number > 11  2 2423423 24242424214 22.22 .324
Boolean > true false


//es5
var a = "Hii"
var b = 10
var c = true

typeof(a)
'string'
typeof(b)
'number'
typeof(c)
'boolean'
var d = "10"
undefined
typeof(c)
'boolean'
typeof(d)
'string'

var e = 10.33
typeof(e)
'number'

var a = "Hii"
var b = "JavaScript"

a+b (concat)
'HiiJavaScript'
a-b
NaN (Not a number)
a*b
NaN
a/b
NaN


var c = 10
a+c
'Hii10'

var a = 10
var b = 5

a+b (addition)
15
a*b
50
a/b
2
a-b
5
a%b
0

number+number = number
number+string = string
string+number = string
string+string = string

"10"+20+30
"1020"+30
"102030"

10+"20"+30
"1020"+30
'102030'

10+20+"30"
30+"30"
'3030'

"10"+20+30-1
102029
10+"20"+30-1
102029
10+20+"30"-1
3029

"10Hi"-1
NaN
"10"-1
9
1*"2a"
NaN
1*"2"
2
"18"/"3"
6
"18a"/"3"
NaN

"10"+"10"
'1010'

var a = "10"
undefined
var b = "5"
undefined
a+b
'105'
parseInt(a)+parseInt(b)
15
var a = "10.22"
parseInt(a)+parseInt(b)
15
parseFloat(a)+parseFloat(b)
15.22

var a = "10"
var b = "5"

Number(a)+Number(b)
15

Number(a+b)
105

var a = true
var b = true
undefined
a+b
2
true+false
1
10/false
Infinity
20*true
20
"true"+"true"
'truetrue'

true is equal to 1
false is equal to 0