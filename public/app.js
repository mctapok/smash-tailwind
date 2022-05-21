const brger = document.querySelector('#brger');
const menu = document.querySelector('#menu');

brger.addEventListener('click', () => { 
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
    }else{
        menu.classList.add('hidden')
    }
 })