let counter = 0; 

let buttonAdd = document.querySelector('#button-add');
console.log(buttonAdd); 

buttonAdd.onclick = function(){
  console.log('running')
  counter++; 
  numberDisplay.innerHTML = counter; 
}

let buttonSubtract = document.querySelector('#button-subtract');

buttonSubtract.onclick = function(){
  console.log('running')
  counter--; 
  numberDisplay.innerHTML = counter; 
}

let numberDisplay = document.querySelector('#number-display');