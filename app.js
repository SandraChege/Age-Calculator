let inputs = document.querySelectorAll("input");
const errorMessage = document.querySelector(".error-message");
const btn = document.querySelector(".calc-button")
// console.log(inputs);

let currentDay = new Date().getDay();
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

let day, month, year;

inputs[0].addEventListener('input', (e) => {
    let valueday = inputs[0].value; //get the value from input field
    if (valueday >= 1 && valueday <= 31) {
      day = parseInt(valueday);
      // console.log(day);
    } else {
      errorMessage.textContent = "Enter a valid day";
    }
});

inputs[1].addEventListener("input", (e) => {
  let valuemonth = inputs[1].value; //get the value from input field
  if (valuemonth >= 1 && valuemonth <= 12) {
      let month = parseInt(valuemonth);
    //console.log(month);
  } else {
    errorMessage.textContent = "Enter a valid month";
  }
});


inputs[2].addEventListener("input", (e) => {
  let valueyear = inputs[2].value; //get the value from input field
  if (parseInt(valueyear) >= 1000 && parseInt(valueyear) <= currentYear) {
    let year = parseInt(valueyear);
    //console.log(year);
  } else {
    errorMessage.textContent = "Enter a valid day";
  }
});

function calculate() {
    let myDay = currentDay - day;
    let myMonth = currentMonth - month;
    let myYear = currentYear - year;
    if (myDay < 0) {
      myMonth -= 1;
      myDay += 30;
    }
    if (myMonth < 0) {
      myYear -= 1;
      myMonth += 12;
    }
    console.log(myYear);
}



