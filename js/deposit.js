document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositTotal = getInputFieldById('deposit-ammount');
    
    const preDepositTotal = getTextElementById('deposit-total');

    const depositTotal = preDepositTotal + newDepositTotal;
    setTextElementValueById('deposit-total', depositTotal);
    const preTotalBalance = getTextElementById('balance-total');
    const totalBalance = preTotalBalance + newDepositTotal;
    setTextElementValueById('balance-total', totalBalance);
})