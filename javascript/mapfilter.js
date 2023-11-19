Map
> Map help to iterate over the array
> It always return the same length of output as input array
> it is use to apply the logics

var a = [4,5,23,12,34,2,7,47]
a.map((data) => { return data *2 })
[8, 10, 46, 24, 68, 4, 14, 94]


filter
> Help to filter out the value
> It may or may not return same length of output as input array
> it only return those value for which output is true

var a = [4,5,23,12,34,2,7,47]
a.filter((data) =>  {return data>20})
 [23, 34, 47]

var a = [4,5,23,12,34,2,7,47]
a.map((data) =>  {return data>20})
(8) [false, false, true, false, true, false, false, true]