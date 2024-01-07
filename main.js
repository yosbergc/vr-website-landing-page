window.addEventListener('load', () => {
    let hamburgerIcon = document.querySelector('.hamburgerIcon');
    let mobileMenu = document.querySelector('.mobile-menu');
    let closeMenu = document.querySelector('.closeMenuIcon');

    hamburgerIcon.addEventListener('click', () => {
        mobileMenu.classList.remove('hide');
    })
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.add('hide');
})
})