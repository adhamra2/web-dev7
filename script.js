const openMenuBtn = document.getElementById("open")
const closeMenuBtn = document.getElementById("close")
const phoneMenu = document.getElementById("phone-menu")

function openMenu() {
    openMenuBtn.style.display = "none"
    closeMenuBtn.style.display = "block"
    phoneMenu.style.display = "flex"
}

openMenuBtn.addEventListener("click", openMenu) 

function closeMenu() {
    openMenuBtn.style.display = "block"
    closeMenuBtn.style.display = "none"
    phoneMenu.style.display = "none"
}

closeMenuBtn.addEventListener("click", closeMenu) 

const header = document.getElementById("header")
const header2 = document.getElementById("header2")

window.addEventListener("scroll", function() {
    header.classList.toggle("blurbackground", window.scrollY > 80)
});

window.addEventListener("scroll", function() {
    header2.classList.toggle("blurbackground", window.scrollY > 80)
});

window.addEventListener("scroll", function() {
    phoneMenu.style.display ="none",( window.scrollY > 200)
    openMenuBtn.style.display = "block"
    closeMenuBtn.style.display = "none"
});


ScrollReveal().reveal(".about-header", { distance: '200px' }  );
ScrollReveal().reveal(".about-header", { delay: '200' }  );
ScrollReveal().reveal(".about-container h2", { distance: '300px' }  );
ScrollReveal().reveal(".about-container h2", { delay: '300' }  );
ScrollReveal().reveal(".about-container p", { distance: '400px' }  );
ScrollReveal().reveal(".about-container p", { delay: '400' }  );
ScrollReveal().reveal(".c1", { distance: '500px' }  );
ScrollReveal().reveal(".c2", { distance: '600px' }  );
ScrollReveal().reveal(".c3", { distance: '700px' }  );
ScrollReveal().reveal(".c4", { distance: '800px' }  );
ScrollReveal().reveal(".c1", { delay: '400' }  );
ScrollReveal().reveal(".c2", { delay: '500' }  );
ScrollReveal().reveal(".c3", { delay: '600' }  );
ScrollReveal().reveal(".c4", { delay: '700' }  );

