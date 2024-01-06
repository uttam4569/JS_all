 let form = document.querySelector('form')

 // this usecase will give you empty
 // let height = parseInt(document.querySelector('#height').value)

 form.addEventListener('submit', function(e){
    e.preventDefault()


    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height} `;

    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight} `;
    } else {
        let bmi = (weight / ((height*height)/10000)).toFixed(2)
        // show the results
        results.innerHTML = `<span>${bmi}</span>`
    }


 });
