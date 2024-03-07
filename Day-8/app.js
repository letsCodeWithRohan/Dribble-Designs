let modechanger = document.querySelector('#mode');

modechanger.addEventListener('click',() => {
    modechanger.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('light');
})