const tog=document.querySelector('.toggle')
const shc=document.querySelector('.showcase')

tog.addEventListener('click', function(){
    tog.classList.toggle('active')
    shc.classList.toggle('active')
})