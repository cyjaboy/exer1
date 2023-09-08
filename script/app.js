function displaySum() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);

  let total = firstNum + secondNum;
  document.getElementById("sum").innerHTML = `${firstNum} + ${secondNum} equals to ${total}`;
}

function displayDifference() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);

  let total = firstNum - secondNum;
  document.getElementById("difference").innerHTML = `${firstNum} - ${secondNum} equals to ${total}`;
}

document.getElementById('sumButton').addEventListener("click", displaySum);
document.getElementById('differenceButton').addEventListener("click", displayDifference);
