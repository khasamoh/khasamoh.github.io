document.addEventListener('DOMContentLoaded',()=>{
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let namei = document.querySelector('#namei');
    let emaili = document.querySelector('#emaili');
    let address = document.querySelector('#address');
    let comment= document.querySelector('#comment');
    let error= document.querySelector('#error');

    namei.textContent = localStorage.getItem('name');
    emaili.textContent = localStorage.getItem('email');
    comment.textContent = localStorage.getItem('comment');
    address.textContent = localStorage.getItem('address');

    document.querySelector('#formLogin').onsubmit = ()=>{
         //Verify user to login
         if((name.value) ===(localStorage.getItem('name')) && (email.value) ===(localStorage.getItem('email'))){
             //Redirect to CV Page
         window.location.href = 'index.html';
         }else{
             error.textContent = "Your login information not correct, Please try again";
             error.style.color = 'red';
         }
         return false;
     }
 });

 document.addEventListener('DOMContentLoaded',()=>{
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let address = document.querySelector('#address');
    let comment= document.querySelector('#comment');
    document.querySelector('#formContact').onsubmit = ()=>{
         //Save to local Storage
         localStorage.setItem('name',name.value);
         localStorage.setItem('email',email.value);
         localStorage.setItem('address',address.value);
         localStorage.setItem('comment',comment.value);
         //Redirect to login form
         window.location.href = 'login.html';
         return false;
     }
 });