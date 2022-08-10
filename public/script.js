const menubtn = document.querySelector('#menu-btn')
const menuitems = document.querySelector('#menu-items')

menubtn.addEventListener('click', () => {
    if (menuitems.classList.contains('hidden')) {
        menuitems.classList.remove('hidden')
    } else {
        menuitems.classList.add('hidden')
    }
})