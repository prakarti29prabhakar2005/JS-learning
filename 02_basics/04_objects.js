//const instaUser = new Object()
const instaUser = {}

instaUser.id = "123abc";
instaUser.name = "Pari";

console.log(instaUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userFullName : {
            userName : "Prakarti",
            surName : "Prabhakar"
        }
    }
}

console.log(regularUser.fullname?.userFullName) // this ? is useful when we take value from API or else we have to keep if else everywhere

const obj1 = {1 : 'a', 2 : 'b'}
const obj2 = {3 : 'c', 4 : 'd'}

// const obj3 = {obj1, obj2}
// console.log(obj3)

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3)

console.log(Object.keys(instaUser))
console.log(Object.entries(instaUser))

console.log(instaUser.hasOwnProperty('name'))

const course = {
    courseName : "JS learning",
    price : "999",
    courseInstructor : "Prakarti"
}

//Now if we have to access courseInstructor name we have to write course.courseInstructor again and again ; but to avoid this we follow the following way of addressing:
const {courseInstructor : instructor} = course
//console.log(courseInstructor);
console.log(instructor)





