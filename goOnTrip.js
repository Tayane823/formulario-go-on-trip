
const checkNews = document.querySelector('.news')

window.onload = function () {
    const buttonSubmit = document.querySelector('#button-submit')
    buttonSubmit.addEventListener("click" , dontSubmit)
    const buttonClean = document.querySelector('#button-clean')
    buttonClean.addEventListener("click" , clearInfos)    
    
}
function clearInfos() {
    location.reload()
}
function dontSubmit(event) {
    event.preventDefault()

    const validation = textValidation()
    if (validation === false) {
        alert("Dados Inválidos")
    } else {
        alert("Seus dados foram enviados com sucesso! Obrigado por participar do concurso Go on Trip!")
    }
}


function textValidation() {
    const name = document.querySelector('#input-name').value.length
    const invalidName = name < 10 || name > 50;

    const email = document.querySelector('#input-email').value.length
    const invalidEmail = email < 10 || email > 50

    const descrition = document.querySelector("#input_descrition").value.length
    const invalidDescrition = descrition > 500


    if (invalidName || invalidEmail || invalidDescrition) {
        return false
    } else {
        return true 
    }


}

    
