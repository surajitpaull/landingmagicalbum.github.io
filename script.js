
document.addEventListener("DOMContentLoaded", function() {
    const mobileImage = document.getElementById('mobile-image');
    const mobileVideo = document.getElementById('mobile-video');

    mobileImage.addEventListener('mouseenter', function() {
        mobileVideo.play();
    });

    mobileImage.addEventListener('mouseleave', function() {
        mobileVideo.pause();
        mobileVideo.currentTime = 0; // Reset video to the beginning when paused
    });
});


// swipe meny hamberger

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuBtn.addEventListener('click', function () {
        mobileMenu.style.display = 'block';
        menuBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        mobileMenu.style.display = 'none';
        menuBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    });
});

// toggleMenu

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
});