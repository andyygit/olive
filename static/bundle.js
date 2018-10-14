window.onload = function () {
    var menuItem = document.querySelectorAll('nav a')[0];
    menuItem.addEventListener('click', function () {
        menuItem.nextElementSibling.classList.toggle('hide');
    });
    menuItem.addEventListener('focusout', function () {
        if (menuItem.nextElementSibling.classList.contains('hide')) {
            return;
        } else {
            menuItem.nextElementSibling.classList.toggle('hide');
        }
    });
};