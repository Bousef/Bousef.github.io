function tickUp() {
  const counterElement = document.getElementById('counter');
  let currentCount = parseInt(counterElement.textContent);
  currentCount++;
  counterElement.textContent = currentCount;
}

function tickDown() {
  const counterElement = document.getElementById('counter');
  let currentCount = parseInt(counterElement.textContent);
  currentCount--;
  counterElement.textContent = currentCount;
}

function runForLoop() {
  const counterElement = document.getElementById('counter');
  const counter = parseInt(counterElement.textContent);
  const resultElement = document.getElementById('forLoopResult');
  
  let result = '';
  for (let i = 0; i <= counter; i++) {
    result += i + ' ';
  }
  
  resultElement.textContent = result.trim();
}


function showOddNumbers() {
  const counterElement = document.getElementById('counter');
  const counter = parseInt(counterElement.textContent);
  const resultElement = document.getElementById('oddNumberResult');
  
  let result = '';
  for (let i = 1; i <= counter; i++) {
    if (i % 2 !== 0) {
      result += i + ' ';
    }
  }
  
  resultElement.textContent = result.trim();
}

function addMultiplesToArray() {
  const counterElement = document.getElementById('counter');
  const counter = parseInt(counterElement.textContent);
  
  let multiplesArray = [];
  
  for (let i = counter; i >= 5; i--) {
    if (i % 5 === 0) {
      multiplesArray.push(i);
    }
  }
  
  console.log(multiplesArray);
}

function printCarObject() {
  const carType = document.getElementById('carType').value;
  const carMPG = document.getElementById('carMPG').value;
  const carColor = document.getElementById('carColor').value;
  
  const carObject = {
    cType: carType,
    cMPG: carMPG,
    cColor: carColor
  };
  
  console.log(carObject);
}

function loadCar(carNumber) {

  let selectedCar;
  
  if (carNumber === 1) {
    selectedCar = carObject1;
  } else if (carNumber === 2) {
    selectedCar = carObject2;
  } else if (carNumber === 3) {
    selectedCar = carObject3;
  }
  
  document.getElementById('carType').value = selectedCar.cType;
  document.getElementById('carMPG').value = selectedCar.cMPG;
  document.getElementById('carColor').value = selectedCar.cColor;
}

function changeColor(colorNumber) {
  const paragraphElement = document.getElementById('styleParagraph');
  
  if (colorNumber === 1) {
    paragraphElement.style.color = 'red';
  } else if (colorNumber === 2) {
    paragraphElement.style.color = 'green';
  } else if (colorNumber === 3) {
    paragraphElement.style.color = 'blue';
  }
}
