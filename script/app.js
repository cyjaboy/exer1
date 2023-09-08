function displaySum() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let sum = firstNum + secondNum;
  document.getElementById("answer").innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}` ;
}

document.getElementById('sumButton').addEventListener("click", displaySum);


 let difference = firstNum - secondNum;
  document.getElementById("answer").innerHTML = ` ${firstNum} - ${secondNum}, equals to ${total}` ;
}

document.getElementById('subtractButton').addEventListener("click", displayDifference);
