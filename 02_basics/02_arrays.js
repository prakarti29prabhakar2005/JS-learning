const marvel = ["spiderman", "batman", "thor", "flash"]
const dcHero = ["shaktiman", "naagraj", "powerRanger"]

// marvel.push(dcHero)
// console.log(marvel)
// console.log(marvel[4][2])
// marvel.pop()

// const allHero = marvel.concat(dcHero)
// console.log(allHero);

const all_new_heros = [...marvel, ...dcHero]
console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Prakarti"))
console.log(Array.from("Prakarti"))
console.log(Array.from({name : "Prakarti"})) //interesting case