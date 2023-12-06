const coding = ['js', 'ruby', 'java', 'python', 'cpp']

coding.forEach(function (item) {
    console.log(item)
})

coding.forEach((item) => {
    console.log(item)
})

function printMe(item){
    console.log(item)
}

coding.forEach(printMe)

const mycoding = [
    {
        languageName : 'javascript',
        languageFileName : 'js'
    },
    {
        languageName : 'java',
        languageFileName : 'java'
    },
    {
        languageName : 'python',
        languageFileName : 'py'
    },
]

mycoding.forEach((item) => {
    console.log(item.languageName)
})