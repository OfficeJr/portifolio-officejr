const variable = {
    nav: {
        header: document.querySelector('header'),
        btnHeaderExpand: document.querySelector('.fi.fi-br-menu-burger'),
    }
}


variable.nav.btnHeaderExpand.addEventListener('click', function () {
    variable.nav.header.classList.toggle("expanded");
    variable.nav.btnHeaderExpand.classList.toggle("fi-br-cross");
})


window.addEventListener("scroll", function (){
    variable.nav.header.classList.toggle('scroll_header', window.scrollY > 0);
})

