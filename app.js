let inputs = document.querySelectorAll("input");
const errorDayMessage = document.querySelector(".error-day-message");
const errorMonthMessage = document.querySelector(".error-month-message");
const errorYearMessage = document.querySelector(".error-year-message");
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
    errorDayMessage.textContent = "";
  } else {
    errorDayMessage.textContent = "Enter a valid day";
  }
});

inputs[1].addEventListener("input", (e) => {
  let valuemonth = inputs[1].value; //get the value from input field
  if (valuemonth >= 1 && valuemonth <= 12) {
    month = parseInt(valuemonth) - 1;
    errorMonthMessage.textContent = "";
    //console.log(month);
  } else {
    errorMonthMessage.textContent = "Enter a valid month";
  }
});

inputs[2].addEventListener("input", (e) => {
  let valueyear = inputs[2].value; //get the value from input field
  if (parseInt(valueyear) >= 0o0 && parseInt(valueyear) <= currentYear) {
    year = parseInt(valueyear);
    errorYearMessage.textContent = "";
    //console.log(year);
  } else {
    errorYearMessage.textContent = "Enter a valid year";
  }
});

btn.addEventListener("click", calculate);

function calculate() {
   if (
     errorDayMessage.textContent ||
     errorMonthMessage.textContent ||
     errorYearMessage.textContent
   ) {
     // Don't proceed with calculation if any error messages are displayed.
     return;
   }

  if (day !== undefined && month !== undefined && year !== undefined) {
    // if (
    //   year > currentYear ||
    //   (year === currentYear && month > currentMonth) ||
    //   (year === currentYear && month === currentMonth && day > currentDay)
    // ) {
    //   errorMessage.textContent =
    //     "Please enter a valid date in the past or today.";
    //   return;
    // }
    if (year > currentYear) {
      errorYearMessage.textContent = "Please enter a valid year";
      return;
    }
    if (year === currentYear && month > currentMonth) {
      errorMonthMessage.textContent = "Please enter a valid month";
      return;
    }
    if (year === currentYear && month === currentMonth && day > currentDay) {
      errorDayMessage.textContent = "Please enter a valid day";
      return;
    }
    if (
      day === 31 &&
      (month === 3 || month === 5 || month === 8 || month === 10)
    ) {
      errorDayMessage.textContent =
        "April, June, September, and November have 30 days.";
      return;
    }
    // Check for leap year
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    if (month === 1) {
      if ((day > 29 && isLeapYear) || (day > 28 && !isLeapYear)) {
        errorDayMessage.textContent = isLeapYear
          ? "February in a leap year has 29 days."
          : "This is not a leap year February has 28 days.";
        return;
      }
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
  }
  // else {
  //   errorMessage.textContent = "Please enter a valid date";
  // }
}