new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  centeredSlides: false,
  loop: true,

  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,

  freeMode: true,
  freeModeMomentum: false,
});

// Add this temporarily to debug spacing
document.addEventListener('DOMContentLoaded', function() {
  const banner = document.querySelector('.banner-section');
  const navbar = document.querySelector('.navbar');
  
  if (banner && navbar) {
    console.log('Navbar height:', navbar.offsetHeight);
    console.log('Banner top position:', banner.offsetTop);
    console.log('Body margin top:', document.body.style.marginTop);
  }
});

// Force spacing with JavaScript (runs immediately)
(function() {
    const banner = document.getElementById('main-banner');
    if (banner) {
        // Apply styles immediately
        banner.style.marginTop = '40px';
        banner.style.paddingTop = '10px';
        
        // For mobile
        if (window.innerWidth <= 768) {
            banner.style.marginTop = '25px';
            banner.style.paddingTop = '8px';
        }
    }
    
    // Also check for any empty divs creating space
    const bodyChildren = document.body.children;
    for (let child of bodyChildren) {
        // If there's an empty element before banner, remove it
        if (child.id === 'main-banner') break;
        if (child.offsetHeight < 10 && !child.classList.contains('navbar')) {
            child.style.display = 'none';
        }
    }
})();
