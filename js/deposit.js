
// Step 01: add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function(){
//    step 02: get the deposit amount from the deposit Field
// for input field use value to the value inside the input field
const depositField = document.getElementById('deposit-field');
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString);
// step 03: ge the current deposit total 
// for non-input 
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);

//  step 04: add number to set the total deposit 

const currentDepositTotal = previousDepositTotal + newDepositAmount;

depositTotalElement.innerText = currentDepositTotal;    
// step 05: get ballance current total 
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// step 06: calculate current total balance 
const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

balanceTotalElement.innerText = currentBalanceTotal;
// step 04: clear deposit field
depositField.value = ' ';
})