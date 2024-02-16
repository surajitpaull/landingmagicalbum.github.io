
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
        toggleMenu(true);
    });
    
    closeBtn.addEventListener('click', function () {
        toggleMenu(false);
    });
    
    function toggleMenu(open) {
        if (open) {
            mobileMenu.style.display = 'block';
            menuBtn.style.display = 'none';
            closeBtn.style.display = 'block';
        } else {
            mobileMenu.style.display = 'none';
            menuBtn.style.display = 'block';
            closeBtn.style.display = 'none';
        }
    }
    
    // Close mobile menu on window resize if the screen is wider than 600px
    window.addEventListener('resize', function() {
        if (window.innerWidth > 600) {
            mobileMenu.style.display = 'none';
            menuBtn.style.display = 'block';
            closeBtn.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuContainer = document.querySelector('.menu-container');

    // Hide menu container on big screens, show on small screens
    function toggleMenuContainer() {
        if (window.innerWidth > 600) {
            menuContainer.style.display = 'none'; // Hide menu container on big screens
        } else {
            menuContainer.style.display = ''; // Show menu container on small screens
        }
    }

    // Toggle menu container on page load
    toggleMenuContainer();

    // Toggle menu container on window resize
    window.addEventListener('resize', toggleMenuContainer);
});

// toggleMenu

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
});

// sticky navba
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// random image / Unsplash API
async function getRandomImageUrl() {
    try {
        const response = await fetch('https://source.unsplash.com/random/50x50/?face people ');
        if (!response.ok) {
            throw new Error('Failed to fetch image');
        }
        return response.url; // Return random image
    } catch (error) {
        console.error('Error fetching image:', error);
        return null;
    }
}
// Replace profile picture 
async function replaceProfilePictures() {
    var profilePics = document.querySelectorAll('.profile-pic');
    for (let i = 0; i < profilePics.length; i++) {
        var randomImageUrl = await getRandomImageUrl();
        if (randomImageUrl) {
            profilePics[i].style.backgroundImage = 'url(' + randomImageUrl + ')';
        }
    }
}

replaceProfilePictures();


// autoplay ios

// shopping section 

function redirectToCheckout(button) {
    // product details 
    const productName = button.dataset.productName;
    const discountPrice = parseInt(button.dataset.discountPrice);
    const actualPrice = parseInt(button.dataset.actualPrice);
    const discountPercentage = parseInt(button.dataset.discountPercentage);
    const imageSrc = button.dataset.imageSrc;

    // For example, you can use localStorage to store the product details and retrieve them on the checkout page
    localStorage.setItem('productName', productName);
    localStorage.setItem('discountPrice', discountPrice);
    localStorage.setItem('actualPrice', actualPrice);
    localStorage.setItem('discountPercentage', discountPercentage);
    localStorage.setItem('imageSrc', imageSrc);

    // Redirect checkout page
    window.location.href = 'checkout.html'; 
}
