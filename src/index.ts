// let inputs = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>;
let yearInput = document.querySelector("#year") as HTMLInputElement;
let monthInput = document.querySelector("#month") as HTMLInputElement;
let dayInput = document.querySelector("#day") as HTMLInputElement;
let errorDayMessage = document.querySelector(".error-day-message") as HTMLSpanElement;
let errorMonthMessage = document.querySelector(".error-month-message") as HTMLSpanElement;
let errorYearMessage = document.querySelector(".error-year-message") as HTMLSpanElement;
let btn = document.querySelector(".calc-button") as HTMLButtonElement;
let dayResult = document.querySelector("#days") as HTMLInputElement;
let monthResult = document.querySelector("#months") as HTMLInputElement;
let yearResult = document.querySelector("#years") as HTMLInputElement;
let currentDay = new Date().getDate();
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

class AgeCalculator {
  constructor() {}

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
