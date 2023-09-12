
document.addEventListener("DOMContentLoaded", function () {
  const firstNumElement = document.getElementById("firstNum");
  const secondNumElement = document.getElementById("secondNum");

  const randomFirstNum = getRandomNumber(1, 1000); // Adjust the range as needed
  const randomSecondNum = getRandomNumber(1, 1000); // Adjust the range as needed

  firstNumElement.textContent = randomFirstNum;
  secondNumElement.textContent = randomSecondNum;
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function displaySum() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);

  let total = firstNum + secondNum;
  document.getElementById("sumanswer").innerHTML = `${firstNum} + ${secondNum} equals to ${total}`;
}

function displayDifference() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);

  let total = firstNum - secondNum;
  document.getElementById("differenceanswer").innerHTML = `${firstNum} - ${secondNum} equals to ${total}`;
}


function displayProduct() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);

  let total = firstNum * secondNum;
  document.getElementById("productanswer").innerHTML = `${firstNum} * ${secondNum} equals to ${total}`;
}

function displayQuotient() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);

  let total = firstNum / secondNum;
  document.getElementById("quotientanswer").innerHTML = `${firstNum} / ${secondNum} equals to ${total}`;
}

// app.js

// Generate and display random numbers
function generateRandomNumbers() {
  const firstNumElement = document.getElementById("firstNum");
  const secondNumElement = document.getElementById("secondNum");

  const randomFirstNum = getRandomNumber(1, 1000); // Adjust the range as needed
  const randomSecondNum = getRandomNumber(1, 1000); // Adjust the range as needed

  firstNumElement.textContent = randomFirstNum;
  secondNumElement.textContent = randomSecondNum;
}

// Function to get a random number within a specified range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Event listener for the Refresh button
document.getElementById("refreshButton").addEventListener("click", generateRandomNumbers);

// Initialize random numbers when the page loads
generateRandomNumbers();

// Rest of your JavaScript code...




document.getElementById('sumButton').addEventListener("click", displaySum);
document.getElementById('differenceButton').addEventListener("click", displayDifference);
document.getElementById('productButton').addEventListener("click", displayProduct);
document.getElementById('quotientButton').addEventListener("click", displayQuotient);

