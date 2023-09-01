const saveData = ()=>{
    localStorage.setItem('fromCurrency', document.getElementById('formMoney').value)
    localStorage.setItem('toCurrency',  document.getElementById('toMoney').value)
}


const getData=()=>{
    document.getElementById('formMoney').value = localStorage.getItem('fromCurrency');   
    document.getElementById('toMoney').value = localStorage.getItem('toCurrency');   
}

getData();