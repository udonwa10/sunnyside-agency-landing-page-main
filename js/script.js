const navLink = document.querySelector('.nav-menu')
const navBtn = document.querySelector('.nav-icon')

navBtn.addEventListener('click', ()=>{
    navLink.classList.toggle('active')
    navLink.style.transform ='translateY(7%)';
    navLink.style.transition = 'ease-in 0.5s';
})