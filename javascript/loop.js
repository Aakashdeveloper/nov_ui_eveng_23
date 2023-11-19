> help to generate the series as well as iterate over the Array

for(let i=0; i<5;i++){
    console.log(i)
}
0
1
2
3
4

for(let i=0; i<10;i+=2){
    console.log(i)
}
0
2
4
6
8

let city = ["Delhi","Mumbai","Pune","Venice","Innsburg","Amsterdam"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}


let city = ["Delhi","Mumbai","Pune","Venice"]
for(mycity of city){
    console.log(mycity)
}

var movie = {
    name:"Jab We Met",
    rating:4.7,
    ind:"Bollywood"
}

for(key in movie){
    console.log(key)
}
name
rating
ind


for(key in movie){
    console.log(movie[key])
}

Jab We Met
4.7
Bollywood
