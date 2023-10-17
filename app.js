let inputs = document.querySelectorAll("input");
const errorMessage = document.querySelector(".error-message");
const btn = document.querySelector(".calc-button");
const yearResult = document.querySelector("#years");
const monthResult = document.querySelector("#months");
const daysResult = document.querySelector("#days");
// console.log(inputs);

let currentDay = new Date().getDate();
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

let day, month, year;

inputs[0].addEventListener("input", (e) => {
  let valueday = inputs[0].value; //get the value from input field
  if (valueday >= 1 && valueday <= 31) {
    day = parseInt(valueday);
    // console.log(day);
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Enter a valid day";
  }
});

inputs[1].addEventListener("input", (e) => {
  let valuemonth = inputs[1].value; //get the value from input field
  if (valuemonth >= 1 && valuemonth <= 12) {
    month = parseInt(valuemonth) - 1;
    errorMessage.textContent = "";
    //console.log(month);
  } else {
    errorMessage.textContent = "Enter a valid month";
  }
});

inputs[2].addEventListener("input", (e) => {
  let valueyear = inputs[2].value; //get the value from input field
  if (parseInt(valueyear) >= 0o0 && parseInt(valueyear) <= currentYear) {
    year = parseInt(valueyear);
    errorMessage.textContent = "";
    //console.log(year);
  } else {
    errorMessage.textContent = "Enter a valid year";
  }
});

btn.addEventListener("click", calculate);

function calculate() {
  if (day !== undefined && month !== undefined && year !== undefined) {
    if (
      year > currentYear ||
      (year === currentYear && month > currentMonth) ||
      (year === currentYear && month === currentMonth && day > currentDay)
    ) {
      errorMessage.textContent =
        "Please enter a valid date in the past or today.";
      return;
    }
    // if (year > currentYear) {
    //   errorMessage.textContent = "Please enter a valid year";
    //    if (month > currentMonth) {
    //      errorMessage.textContent = "Please enter a valid month";
    //   }
    //    if (day > currentDay) {
    //      errorMessage.textContent = "Please enter a valid day";
    //   }
    if (
      day === 31 &&
      (month === 3 || month === 5 || month === 8 || month === 10)
    ) {
      errorMessage.textContent =
        "April, June, September, and November have 30 days.";
      return;
    }
  }
  if (day && month && year !== "") {
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
    yearResult.textContent = myYear;
    monthResult.textContent = myMonth;
    daysResult.textContent = myDay;
  } else {
    errorMessage.textContent = "Please enter a valid date";
  }
}