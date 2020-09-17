const moreBtn = document.querySelector('.info__title-moreBtn');
const title = document.querySelector('.info__title');

moreBtn.addEventListener('click', ()=>{
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});