//  add money to the account

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    // step 2: get new added money
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput)

    //get the pin provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput)
})