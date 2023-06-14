const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const button = document.querySelector(".create-account");


// change password input border to red and print unmatching password message
button.addEventListener('click', ()=>{

    //will only display 1 instance of 'Passwords do not match'
    if (password.value != confirmPassword.value && document.querySelector('.unmatching-pass')===null){
        const unmatchingPass=document.createElement('p');
        unmatchingPass.classList.add('unmatching-pass');
        unmatchingPass.textContent='* Passwords do not match'
        unmatchingPass.style.color='red';
        unmatchingPass.style.margin='0px';
        
        const passwordContainer=document.querySelectorAll('.field-container')[4];
        passwordContainer.append(unmatchingPass);


        password.style.boxShadow= "0px 0px 1.5px red";
        password.style.borderColor='red';
        confirmPassword.style.boxShadow='0px 0px 1.5px red';     
        confirmPassword.style.borderColor='red';                                                                             
    }

    else if(password.value == confirmPassword.value && document.querySelector('.unmatching-pass')!=null){
        const unmatchingPass = document.querySelector('.unmatching-pass');
        unmatchingPass.remove();
        password.style.borderColor='lightgray';
        password.style.boxShadow='none';
        confirmPassword.style.borderColor='lightgray'
        confirmPassword.style.boxShadow='none';
        

    }
});

