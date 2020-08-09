const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


// #1

function getMyTaxes(salary) {
  return this.tax * this.middleSalary;
}
console.log(getMyTaxes.call(ukraine, 481));

// #2

function getMiddleTaxes(){
  return this.tax * this.middleSalary;
}
console.log(getMiddleTaxes.call(litva));

// #3

function getTotalTaxes(){
  return this.tax * this.middleSalary * this.vacancies;
}
console.log(getTotalTaxes.call(ukraine));

// №4

function getMySalary(country){
  setInterval(function(){
  let minTaxes = 1500,
      maxTaxes = 2000,
      obj = {},
      salary = Math.round(Math.random() * (maxTaxes - minTaxes) + minTaxes),
      profit = salary - getMyTaxes.call(country, salary);

      obj.tax = getMyTaxes.call(country, salary);
      obj.salary = salary;
      obj.profit = profit;

      console.log(obj);
    }, 810)
}
getMySalary(ukraine);
