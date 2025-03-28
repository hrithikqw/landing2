// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation for elements on scroll
const elementsToAnimate = document.querySelectorAll('.value-card, .team-member, .timeline-item');
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const animateObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = entry.target.classList.contains('value-card') || entry.target.classList.contains('team-member') ? 
                                          'translateY(0)' : 'translateX(0)';
        }
    });
}, observerOptions);

elementsToAnimate.forEach(element => {
    element.style.opacity = 0;
    
    if (element.classList.contains('value-card') || element.classList.contains('team-member')) {
        element.style.transform = 'translateY(20px)';
    } else {
        // Timeline items
        if (element.offsetLeft === 0) {
            element.style.transform = 'translateX(-20px)';
        } else {
            element.style.transform = 'translateX(20px)';
        }
    }
    
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    animateObserver.observe(element);
});

// Mobile menu toggle
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
mobileMenuBtn.style.display = 'none';
mobileMenuBtn.style.background = 'none';
mobileMenuBtn.style.border = 'none';
mobileMenuBtn.style.color = 'white';
mobileMenuBtn.style.fontSize = '24px';
mobileMenuBtn.style.cursor = 'pointer';

// Responsive design adjustments
function adjustForMobileView() {
    const width = window.innerWidth;
    
    if (width <= 768) {
        if (!document.querySelector('.mobile-menu-btn')) {
            const header = document.querySelector('header');
            const nav = document.querySelector('nav');
            
            header.insertBefore(mobileMenuBtn, nav);
            mobileMenuBtn.style.display = 'block';
            nav.style.display = 'none';
            
            mobileMenuBtn.addEventListener('click', function() {
                if (nav.style.display === 'none') {
                    nav.style.display = 'flex';
                    nav.style.flexDirection = 'column';
                    nav.style.width = '100%';
                    nav.style.textAlign = 'center';
                    nav.style.marginTop = '15px';
                    this.innerHTML = '<i class="fas fa-times"></i>';
                } else {
                    nav.style.display = 'none';
                    this.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        }
    } else {
        const nav = document.querySelector('nav');
        if (nav) {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'row';
        }
        if (document.querySelector('.mobile-menu-btn')) {
            mobileMenuBtn.style.display = 'none';
        }
    }
}
