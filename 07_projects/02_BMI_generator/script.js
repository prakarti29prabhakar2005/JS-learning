const calculate = document.querySelector('form');

calculate.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result');

    if (height === '' || height <= 0 || isNaN(height)) {
        result.innerHTML = "Please give a valid height";
    } else if (weight === '' || weight <= 0 || isNaN(weight)) {
        result.innerHTML = "Please give a valid weight"; // Corrected the error message for weight
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        result.innerHTML = `Your BMI is ${bmi}`
    }
});


