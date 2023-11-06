"use strict";
// let inputs = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>;
let yearInput = document.querySelector("#year");
let monthInput = document.querySelector("#month");
let dayInput = document.querySelector("#day");
let errorDayMessage = document.querySelector(".error-day-message");
let errorMonthMessage = document.querySelector(".error-month-message");
let errorYearMessage = document.querySelector(".error-year-message");
let btn = document.querySelector(".calc-button");
let dayResult = document.querySelector("#days");
let monthResult = document.querySelector("#months");
let yearResult = document.querySelector("#years");
let currentDay = new Date().getDate();
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
class AgeCalculator {
    constructor() { }
    calculate() {
        let yearInputValue = parseInt(yearInput.value);
        let monthInputValue = parseInt(monthInput.value);
        let dayInputValue = +dayInput.value; //If you add the + infront of a string it changes it to a number
        console.log(typeof (currentYear));
        console.log(typeof (currentMonth));
        console.log(typeof (currentDay));
        // yearResult.value = currentYear - yearInputValue; 
        //   console.log(yearInput.value);
        //   console.log(dayInput.value);
        //   console.log(monthInput.value);
    }
}
let calculator = new AgeCalculator();
btn.addEventListener("click", () => {
    calculator.calculate();
});
