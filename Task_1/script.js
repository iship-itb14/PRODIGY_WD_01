document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
    var menu = document.querySelector(".navbar .menu-item");
    var submenu = menu.querySelector(".submenu");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#555";
            navbar.style.position = "fixed";
            navbar.style.top = "0";
        } else {
            navbar.style.backgroundColor = "#ffb6c1"; 
            navbar.style.position = "relative";
            navbar.style.top = "auto";
            submenu.style.display = "none"; 
        }
    });

    menu.addEventListener("mouseover", function () {
        submenu.style.display = "block";
    });

    menu.addEventListener("mouseout", function () {
        submenu.style.display = "none";
    });

    var menuItems = document.querySelectorAll(".navbar a");

    menuItems.forEach(function (item) {
        item.addEventListener("mouseover", function () {
            this.style.color = "#e75480";
        });

        item.addEventListener("mouseout", function () {
            this.style.color = "#fff";
        });
    });
});
