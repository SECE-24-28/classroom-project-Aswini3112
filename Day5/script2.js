const myForm= document.getElementById('myForm');
const name= document.getElementById('#inp1');
const email= document.getElementById('#inp2');
const age= document.getElementById('#inp3');

//for errors
const nameErr= document.getElementById('nameErr');
const emailErr= document.getElementById('emailErr');
const ageErr= document.getElementById('ageErr');

//event handling

myForm.addEventListener('submit',function(e){
    e.preventDefault();
    if(uname.value.length<3){
        nameErr.style.color="red";
        nameErr.innerText="Name should be greater than 3 letters."
        return;
    }
    if(emailErr.value.length<3){
        emailErr.style.color="red";
        emailErr.innerText="Email should be greater than 3 letters."
        return;
    }
    if(ageErr.value.length<3){
        ageErr.style.color="red";
        ageErr.innerText="Age should be greater than 3 letters."
        return;
    }
    nameErr.innerText="";
    emailErr.innerText="";
    ageErr.innerText="";
    
    console.log(`uname:${uname.value}`);
    console.log(`Email:${email.value}`);
    console.log(`Age:${age.value}`);
    myForm.reset();
})
