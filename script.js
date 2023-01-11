const form= document.getElementById('form');
const email= document.getElementById('emailBox');
const small= document.getElementById('small');
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(email.value.match(validRegex))
    {
        alert('Thank you for applying');
        small.style.display= 'none';
        

    }else if(email.value === ''){

        small.innerText= 'Oops! Please add your email'
        small.style.display= 'block';
        email.style.marginBottom= '2px';
    }
    
    
    else{
        small.style.display= 'block';
        email.style.marginBottom= '2px';
        
    
    }
    
})