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

    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Toggle menu functionality
    function toggleMenu() {
        const isMenuOpen = mobileMenu.style.display === 'block';
        mobileMenu.style.display = isMenuOpen ? 'none' : 'block';
        menuBtn.style.display = isMenuOpen ? 'block' : 'none';
        closeBtn.style.display = isMenuOpen ? 'none' : 'block';
    }

    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);

    // Close mobile menu on window resize if the screen is wider than 600px
    window.addEventListener('resize', function() {
        if (window.innerWidth > 600) {
            mobileMenu.style.display = 'none';
            menuBtn.style.display = 'block';
            closeBtn.style.display = 'none';
        }
    });

    // Fetch and replace profile pictures
    async function getRandomImageUrl() {
        try {
            const response = await fetch('https://source.unsplash.com/random/50x50/?face,people');
            if (!response.ok) {
                throw new Error('Failed to fetch image');
            }
            return response.url; // Return random image URL
        } catch (error) {
            console.error('Error fetching image:', error);
            return null;
        }
    }

    async function replaceProfilePictures() {
        const profilePics = document.querySelectorAll('.profile-pic');
        for (let i = 0; i < profilePics.length; i++) {
            const randomImageUrl = await getRandomImageUrl();
            if (randomImageUrl) {
                profilePics[i].style.backgroundImage = 'url(' + randomImageUrl + ')';
            }
        }
    }

    replaceProfilePictures();
});
