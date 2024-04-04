/*1*/
var hideMenuLink = document.getElementById('hideMenu');
var showMenuLink = document.getElementById('showMenu');
var sidebar = document.getElementById('sidebar');

hideMenuLink.addEventListener('click', function() {
    sidebar.style.display = 'none';
});


for (var i = 1; i <= 15; i++) {
    var hideMenuLink = document.getElementById('hideMenu' + i);
    hideMenuLink.addEventListener('click', function() {
        sidebar.style.display = 'none';
    });
}

showMenuLink.addEventListener('click', function() {
    sidebar.style.display = 'block';
});