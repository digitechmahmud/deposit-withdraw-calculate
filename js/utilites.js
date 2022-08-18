function getInputFieldById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueTotalString = inputField.value;
    const inputValueTotal = parseFloat(inputValueTotalString);
    inputField.value = '';
    return inputValueTotal;
}

function getTextElementById(elementId) {
    const textElement = document.getElementById(elementId);
    const textValueString = textElement.innerText;
    const totalValue = parseFloat(textValueString);
    return totalValue;
}
function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}