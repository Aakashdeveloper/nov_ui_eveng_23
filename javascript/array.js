let a = [1,5,63,32,52,5,35,334] >> Array of numbers
let b = ["Hiii","bie","test"] >> Array of String
let c = [true,true,false] >> Array of Boolean

Array is a collection of homogenious data type as well as hetrogenious

let a = ["a","test",true,,4,6,"few",false,34]


let city = ["Delhi","Mumbai","Pune","Venice"]
undefined
city.length
4

city[0]
'Delhi'
city[1]
'Mumbai'
city[2]
'Pune'
city[city.length-1]
'Venice'
city[city.length-2]
'Pune'

let city = ["Delhi","Mumbai","Pune","Venice"]

city.push('Innsburg')
5
city
(5) ['Delhi', 'Mumbai', 'Pune', 'Venice', 'Innsburg']
city.push('Amsterdam')
6
city
(6) ['Delhi', 'Mumbai', 'Pune', 'Venice', 'Innsburg', 'Amsterdam']
city.pop()
'Amsterdam'
city.pop(22424)
'Innsburg'

let city = ["Delhi","Mumbai","Pune","Venice"]
undefined
city.shift()
'Delhi'
city.shift()
'Mumbai'
city.unshift('London')
3

push > add in the end of Array
pop > remove the last value of array
shift > remove the first value of array
unshift > Add as a value to array

let city = ["Delhi","Mumbai","Pune","Venice"]
city.slice(2,4)
(2) ['Pune', 'Venice']
let city = ["Delhi","Mumbai","Pune","Venice"]
city.slice(1,3)
(2) ['Mumbai', 'Pune']

//splice(startIndex,deletecount,values)

let city = ["Delhi","Mumbai","Pune","Venice","Innsburg","Amsterdam"]

// remove 2 value on index 2
city.splice(2,2)
['Pune', 'Venice']

// add value on index number 3
city.splice(3,0,"Boston","Helsinki")
city
(6) ['Delhi', 'Mumbai', 'Innsburg', 'Boston', 'Helsinki', 'Amsterdam']

city.splice(2,1,"Indore")
['Innsburg']
city
(6) ['Delhi', 'Mumbai', 'Indore', 'Boston', 'Helsinki', 'Amsterdam']


let city = ["Delhi","Mumbai","Pune","Venice","Innsburg","Amsterdam"]

city.indexOf("Delhi")
0
city.indexOf("Innsburg")
4
city.indexOf("Indore")
-1
city.indexOf("Helsinki")
-1

