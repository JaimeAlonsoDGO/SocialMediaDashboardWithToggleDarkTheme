const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () =>{
    btnSwitch.classList.toggle('dark');
    document.body.classList.toggle('dark');
})