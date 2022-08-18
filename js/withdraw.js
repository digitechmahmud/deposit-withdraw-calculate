document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmmount = getInputFieldById('withdraw-ammount');
    const preWithdrawAmmount = getTextElementById('withdraw-total');
    const totalWithdraw = preWithdrawAmmount + newWithdrawAmmount;
    setTextElementValueById('withdraw-total', totalWithdraw);
    const preTotalBalance = getTextElementById('balance-total');
    const totalBalance = preTotalBalance - newWithdrawAmmount;
    setTextElementValueById('balance-total', totalBalance);
})