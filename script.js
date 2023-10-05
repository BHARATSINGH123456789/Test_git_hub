const handleForm = () =>{
const name = document.getElementById('name').value
const email = document.getElementById('email').value
const phone = document.getElementById('phone').value

const validateEmail =(email)=>{
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
function validatePhone(phone) {
    const regex = /^\d{10}$/;
    return regex.test(phone);
}

if(!name){
    return console.log("Enter valid Name")
}
else if(!validateEmail(email)){
    return console.log("Enter valid Email")
}
else if(!validatePhone(phone)){
    return console.log("Enter valid Number")
}else{

    console.log("Your name is "+ name)
    console.log("Your Email is "+ email)
    console.log("Your Phone is "+ phone)
}

}