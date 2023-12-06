// for of

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    console.log(num)
}

const char = "Hello World !"
for (const iterator of char) {
    console.log(iterator)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States")
map.set('FR', "France")

console.log(map)

for (const [key, value] of map) {
    console.log(key,"-:",value)
}

