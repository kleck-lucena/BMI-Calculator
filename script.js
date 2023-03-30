import {Modal} from './modal.js'
import {AlertError} from'./alert-error.js'

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = event => {
  event.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value
  
  const showAlert = notANumber(weight) || notANumber(height)
  if (showAlert){
    AlertError.open()
    return;
}
  AlertError.close()

  const result = IMC(weight, height)
  const message = `Your BMI is ${result}`

  Modal.message.innerText = message
  Modal.open()
}

function notANumber(value){
  return isNaN(value) || value == ""
}

function IMC(weight, height){
  return(weight / ((height /100)**2)).toFixed(2)
}