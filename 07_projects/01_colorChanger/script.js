const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button){
    button.addEventListener('click',function (e){
        if(e.target.id === 'grey'){
            body.style.background=e.target.id
        }
        else if(e.target.id === 'white'){
            body.style.background=e.target.id
        }
        else if(e.target.id === 'blue'){
            body.style.background=e.target.id
        }
        else {
            body.style.background=e.target.id
        }
    })
})