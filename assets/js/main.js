const variable = {
    nav: {
        header: document.querySelector('header'),
        btnHeaderExpand: document.querySelector('.fi.fi-br-menu-burger'),
    }
}


variable.nav.btnHeaderExpand.addEventListener('click', function () {
    console.log("teste");
    variable.nav.header.classList.toggle("expanded");
    variable.nav.btnHeaderExpand.classList.toggle("fi-br-cross");
})