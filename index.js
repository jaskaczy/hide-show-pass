




let passInput=document.querySelector('.pass-input')
let eye=document.querySelector('.fa-eye')
let eyeSlashed=document.querySelector('.fa-eye-slash')


let showPass=()=>{
    if(passInput.type==='password'){
        passInput.type='text'
        eye.classList.add('hide')
        eyeSlashed.classList.remove('hide')
    }else{
        passInput.type='password'
        eye.classList.remove('hide')
        eyeSlashed.classList.add('hide')
    }
   
}
eye.addEventListener('click',showPass)
eyeSlashed.addEventListener('click',showPass)
