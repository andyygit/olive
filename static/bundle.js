window.onload = function () {
    var menuItem = document.querySelectorAll('nav a')[0];
    var nav = document.querySelectorAll('nav')[0];
    var btn = document.getElementById('hamburger');
    menuItem.addEventListener('click', function (event) {
        event.preventDefault();
        menuItem.nextElementSibling.classList.toggle('hide');
    });
    menuItem.addEventListener('focusout', function (event) {
        event.preventDefault();
        if (menuItem.nextElementSibling.classList.contains('hide')) {
            return;
        } else {
            menuItem.nextElementSibling.classList.toggle('hide');
        }
    });
    btn.addEventListener('click', function(event) {
        event.preventDefault();
        if (nav.style.display == 'none') {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    });
};