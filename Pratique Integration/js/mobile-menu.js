document.addEventListener("DOMContentLoaded", function (event) {
    let menuIsOpen = false;

    let menuIcon = document.getElementById('menu-icon');
    let navBar = document.getElementById('nav-bar');
    
    let ul = navBar.children;
    let list_Of_Li = ul[0].getElementsByTagName('li');

    menuIcon.addEventListener('click', showMobileMenu);

    function showMobileMenu() {
        canHoverHambugerMenu = true;
        if (!menuIsOpen) {
            navBar.style.display = 'block';

            navBar.style.position = 'absolute';
            navBar.style.maxWidth = '460px';
            navBar.style.textAlign = 'left';
            navBar.style.zIndex = '15';
        
            ul[0].style.position = 'abosulte';
            ul[0].style.padding = '2px';
 
            for (let i = 0; i < list_Of_Li.length; i++) {
                list_Of_Li[i].style.display = 'block';
                list_Of_Li[i].style.height = '60px';
            }

            menuIsOpen = true;
        }
        else {
            navBar.style.display = 'none';
            menuIsOpen = false;
        }
    }

    function cancelMobileNavStyles(minWidth800) {
        menuIsOpen = false;

        navBar.style = null;
        ul[0].style = null;
        subMenu.style = null;

        for (let i = 0; i < list_Of_Li.length; i++) {
            list_Of_Li[i].style = null;
        }
    }

    let minWidth800 = window.matchMedia("(min-width: 800px)");
    cancelMobileNavStyles(minWidth800);
    minWidth800.addListener(cancelMobileNavStyles);
});