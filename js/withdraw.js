// add event handleer with the withdraw button
     // step 01
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step 02
    const withdrawFlied = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawFlied.value ;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // step 03
    withdrawFlied.value = " ";

    if(isNaN(newWithdrawAmount)){
        alert('Please Provide a valid number');
        return;
    }
     // step 04
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
     
     // step 05
     const balanceTotalElement = document.getElementById("balance-total");
     const previousBalanceTotalString = balanceTotalElement.innerText;
     const previousBalanceTotal = parseFloat(previousBalanceTotalString);
      
    //   step 06
     if(newWithdrawAmount > previousBalanceTotal){
        alert('Bank a eto tk nai');
        return;
     }
     // step 07
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    //  step 08
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
  

})