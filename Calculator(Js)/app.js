let btnClear = document.querySelector('#calc-clear')
let btnBack = document.querySelector('#calc-back')
let btnDecimal = document.querySelector('#calc-decimal')
let displayVal = '0'
let displayValElement = document.querySelector('#calc-display-val')
let pendingVal
let evalStringArray = []



let btnNum = document.querySelectorAll('.calc-btn-num')
let btnOperator = document.querySelectorAll('.calc-btn-operator')

function UpdateDisplayVal(clickObj) {
    let btnText = clickObj.target.innerText

    if (displayVal === '0') {
        displayVal = ''


    }
    displayVal = displayVal + btnText
    displayValElement.innerText = displayVal

}

function performOperation(clickObj) {
    let operator = clickObj.target.innerText
    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0'
            displayValElement.innerText = displayVal
            evalStringArray.push(pendingVal)
            evalStringArray.push('+')
            break;
        case '-':
            pendingVal = displayVal;
            displayVal = '0'
            displayValElement.innerText = displayVal
            evalStringArray.push(pendingVal)
            evalStringArray.push('-')
            break;
        case '×':
            pendingVal = displayVal;
            displayVal = '0'
            displayValElement.innerText = displayVal
            evalStringArray.push(pendingVal)
            evalStringArray.push('*')
            break;
        case '÷':
            pendingVal = displayVal;
            displayVal = '0'
            displayValElement.innerText = displayVal
            evalStringArray.push(pendingVal)
            evalStringArray.push('/')
            break;


        case '=':
            evalStringArray.push(displayVal)
            let evaluation = eval(evalStringArray.join(' ')) // ['5' '+' '5']  '5 + 5'

            displayVal = evaluation + '';
            displayValElement.innerText = displayVal;
            evalStringArray = [];
            break;

        default:
            break;
    }
}


for (let i = 0; i < btnNum.length; i++) {
    btnNum[i].addEventListener('click', UpdateDisplayVal, false)
}

for (let i = 0; i < btnOperator.length; i++) {
    btnOperator[i].addEventListener('click', performOperation, false)
}




btnClear.onclick = () => {
    displayVal = '0'
    pendingVal = undefined
    evalStringArray = []
    displayValElement.innerHTML = displayVal;
}

btnBack.onclick = () => {
    let lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplayVal - 1)

    if (displayVal === "") {
        displayVal = '0';
    }
    displayValElement.innerText = displayVal;

}
btnDecimal.onclick = () => {
    if (!displayVal.includes('.')) {
        displayVal = displayVal + '.'
        displayValElement.innerText = displayVal;

    }
}