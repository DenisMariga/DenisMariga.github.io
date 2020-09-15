// calculate button
const calculate = document.querySelector('form');


calculate.addEventListener('submit', function(e) {

    document.querySelector('.load').style.display = 'block'
    document.querySelector('.results').style.display = 'none';
    setTimeout(calculateResults, 2000)
    e.preventDefault()
})

function calculateResults(e) {
    //ui variables
    const uiAmount = document.querySelector('#loanAmount');
    const uiInterest = document.querySelector('#Interest');
    const uiYears = document.querySelector('#Years');
    const uiMonthlyPayments = document.querySelector('#Monthly');
    const uiTotalPayments = document.querySelector('#total');
    const uiTotalInterest = document.querySelector('#Tl-interest');

    const principle = parseFloat(uiAmount.value);
    const calInterest = parseFloat(uiInterest.value) / 100 / 12;
    const calPayments = parseFloat(uiYears.value) * 12;
    // monthly payments
    const x = Math.pow(1 + calInterest, calPayments);
    const monthly = (principle * x * calInterest) / (x - 1);
    if (isFinite(monthly)) {
        uiMonthlyPayments.value = monthly.toFixed(2);
        uiTotalPayments.value = (monthly * calPayments).toFixed(2);
        uiTotalInterest.value = ((monthly * calPayments) - principle).toFixed(2);
        document.querySelector('.results').style.display = 'block';
        document.querySelector('.load').style.display = 'none'



    } else {
        document.querySelector('.load').style.display = 'none'
        document.querySelector('.results').style.display = 'none';

        const div = document.createElement('div');
        div.setAttribute('class', 'error')
        const h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode('Please enter an infinite number'));
        div.appendChild(h2);
        const container = document.querySelector('.container')
        const heading = document.querySelector('h1')
        container.insertBefore(div, heading)
            // setTimeout(function, milliseconds, param1, param2, ...)
        setTimeout(clearError, 2000)
    }
    e.preventDefault();
}

function clearError() {
    document.querySelector('.error').remove();
}