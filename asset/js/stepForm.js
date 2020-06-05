
    
   // name check
   var Uname = document.getElementById('name');
   var nextBtn1 = document.getElementById('inputNext');

   Uname.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    //  event.preventDefault();
    nextBtn1.click();
    }
  });


   function CheckName(){
       if(Uname.value.length < 3){
           nextBtn1.classList.remove("show");
       }else{
           nextBtn1.classList.add("show");
       }
   }



   // phone check

   var PhoneInput = document.getElementById('phone');
   var nextBtn2 = document.getElementById('inputNext2');

   PhoneInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    //  event.preventDefault();
    nextBtn2.click();
    }
  });


   var regPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
   var phoneError = document.getElementById('NumberError');
   function CheckPhoe(){
       if(PhoneInput.value.length < 5){
           nextBtn2.classList.remove("show");
       }else{
           nextBtn2.classList.add("show");
       }



       // value check 1
       if(PhoneInput.value.match(regPhone))
       {
           phoneError.innerHTML = '';
           nextBtn2.classList.remove("dissable");
       }else
       {
           phoneError.innerHTML = 'Please enter 10 digit mobile no. number only';
           nextBtn2.classList.add("dissable");
       }


   }










   // emil check
   var Uemail = document.getElementById('email');
   var emailMessage = document.getElementById('emailMessage');
   var emailNext = document.getElementById('inputNext3');

   Uemail.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    //  event.preventDefault();
    emailNext.click();
    }
  });


   var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   var mailformate2 = 'abcd@gmail.com';
   function checkEmail(){
       if(Uemail.value.length < 1){
           emailNext.classList.remove("show");
       }else{
           emailNext.classList.add("show");
       }
       // value check 1
       if(Uemail.value.match(mailformat))
       {
           emailMessage.innerHTML = '';
           emailNext.classList.remove("dissable");
       }else
       {
           emailMessage.innerHTML = 'Error. Enter valid email.';
           emailNext.classList.add("dissable");
       }
   };


