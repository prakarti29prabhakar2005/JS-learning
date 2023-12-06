/* ************for in******************** */

const myObject = {
    'cpp' : 'C++',
    'js' : 'javascript',
    'py' : 'python'
}

for (const key in myObject) {
    console.log(myObject[key])
}

const programming = ['rb', 'py', 'cpp', 'js']

for (const key in programming) {
    console.log(programming[key]);
}