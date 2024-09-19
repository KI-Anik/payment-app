//step 1 - set event handler
document.getElementById('button-login').addEventListener('click', function(event){
    // step 2 - prevent default behavior on browser
    event.preventDefault();

    // step 3 - get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log('phone number is -', phoneNumber, ', pin is -', pinNumber)

    // step 4 - validation
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('logged in');
        window.location.href = '/home.html'
    }
    else{
        alert('give me the correct info')
    }
})
