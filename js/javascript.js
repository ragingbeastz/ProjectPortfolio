document.addEventListener('DOMContentLoaded', () => {
    const heroContainer = document.getElementById('heroContainer');
    const dots = [];

    // Ensure the container does not expand beyond the screen width
    // heroContainer.style.overflow = 'hidden';

    // Create dots
    for (let i = 0; i < 200; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.position = 'absolute';
        dot.style.zIndex = '0'; // Ensure dots are behind other elements
        const size = `${Math.random() * 7}px`;
        dot.style.width = size;
        dot.style.height = size;
        dot.style.borderRadius = '50%';
        dot.style.backgroundColor = getRandomColor();
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.opacity = 0;
        heroContainer.appendChild(dot);
        dots.push(dot);
    }

    // Function to get a random color
    function getRandomColor() {
        const colors = ['#FFFFFF', '#FF4D59']; // Red and Blue colors
        const color = colors[Math.floor(Math.random() * colors.length)];
        return color;
    }

    // Function to move dots in arcs and curves
    function moveDots() {
        const speed = 0.05; // Speed variable
        dots.forEach(dot => {
            let x = parseFloat(dot.style.left);
            let y = parseFloat(dot.style.top);

            if (!dot.dx || !dot.dy) {
                const angle = Math.random() * 2 * Math.PI; // Random angle for direction
                dot.dx = speed * Math.cos(angle); // Speed in x direction
                dot.dy = speed * Math.sin(angle); // Speed in y direction
            }

            x += dot.dx;
            y += dot.dy;

            if (x < 15 || x > 85) {
                dot.dx = -dot.dx; // Reverse direction on x-axis
                x = Math.max(0, Math.min(x, 100));
            }
            if (y < 0 || y > 100) {
                dot.dy = -dot.dy; // Reverse direction on y-axis
                y = Math.max(0, Math.min(y, 100));
            }

            dot.style.left = `${x}%`;
            dot.style.top = `${y}%`;
        });
    }

    function calculateOpacity(dot, mouseX, mouseY) {
        const rect = heroContainer.getBoundingClientRect();
        const dotX = (parseFloat(dot.style.left) / 100) * rect.width;
        const dotY = (parseFloat(dot.style.top) / 100) * rect.height;
        const distance = Math.sqrt((mouseX - dotX) ** 2 + (mouseY - dotY) ** 2);

        // Set a maximum range for opacity to start fading (100px in this case)
        const maxDistance = 500;

        // If distance is greater than maxDistance, opacity is 0; otherwise, calculate proportional opacity
        let opacity = 1 - (distance / maxDistance);
        opacity = Math.max(opacity, 0); // Ensure opacity doesn't go below 0

        // Increase size as mouse gets closer
        const minSize = 5; // Minimum size in px
        const maxSize = 10; // Maximum size in px
        const size = minSize + (maxSize - minSize) * (1 - distance / maxDistance);
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;

        return opacity;
    }

    // Mouse move event
    heroContainer.addEventListener('mousemove', (e) => {
        const rect = heroContainer.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        dots.forEach(dot => {
            // Calculate the opacity based on the distance from the mouse
            const opacity = calculateOpacity(dot, mouseX, mouseY);
            dot.style.opacity = opacity;
        });
    });

    // Mouse leave event
    heroContainer.addEventListener('mouseleave', () => {
        const fadeOutInterval = setInterval(() => {
            let allDotsInvisible = true;
            dots.forEach(dot => {
                let opacity = parseFloat(dot.style.opacity);
                if (opacity > 0) {
                    opacity -= 0.05; // Decrease opacity gradually
                    dot.style.opacity = opacity;
                    allDotsInvisible = false;
                }
            });
            if (allDotsInvisible) {
                clearInterval(fadeOutInterval); // Stop the interval when all dots are invisible
            }
        }, 50); // Adjust the interval time for smoother or faster fading
    });

    // Move dots at intervals
    setInterval(moveDots, 10);
});

function GetTimeReference() {
    const time = new Date();
    console.log(time.getHours());

    let greeting;

    if (time.getHours() < 12) {
        greeting = "morning";
    }
    else if (time.getHours() < 18) {
        greeting = "afternoon";
    }
    else {
        greeting = "evening";
    }
    
    document.getElementById('greeting').innerText = greeting;  
}

//Button
const scrollButton = document.getElementById('scrollButton');
const flexboxContainer = document.getElementById('header');

const homeButton = document.getElementById('homeButton');
const aboutButton = document.getElementById('aboutButton');
const projectButton = document.getElementById('projectButton');
const contactButton = document.getElementById('contactButton');

const home = document.getElementById('home');
const about = document.getElementById('about');
const projectSection = document.getElementById('projectSection');
const contact = document.getElementById('contact');



scrollButton.addEventListener('click', function() {
    // Scroll the flexbox into view
    flexboxContainer.scrollIntoView({
        behavior: 'smooth',  // Smooth scrolling
        block: 'start'       // Align to the top of the viewport
    });
});

homeButton.addEventListener('click', function() {
    // Scroll the flexbox into view
    home.scrollIntoView({
        behavior: 'smooth',  // Smooth scrolling
        block: 'start'       // Align to the top of the viewport
    });
});

aboutButton.addEventListener('click', function() {
    // Scroll the flexbox into view
    about.scrollIntoView({
        behavior: 'smooth',  // Smooth scrolling
        block: 'start'       // Align to the top of the viewport
    });
});

projectButton.addEventListener('click', function() {
    // Scroll the flexbox into view
    projectSection.scrollIntoView({
        behavior: 'smooth',  // Smooth scrolling
        block: 'start'       // Align to the top of the viewport
    });
});

contactButton.addEventListener('click', function() {
    // Scroll the flexbox into view
    contact.scrollIntoView({
        behavior: 'smooth',  // Smooth scrolling
        block: 'start'       // Align to the top of the viewport
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const slideInElements = document.querySelectorAll('.slide-in');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const inViewport = (
            rect.top < window.innerHeight && rect.bottom > 0
        );
        return inViewport;
    }

    function checkSlideIn() {
        slideInElements.forEach(element => {
            if (isInViewport(element)) {
                if (!element.classList.contains('visible')) {
                    element.classList.add('visible');
                }
            }
        });
    }

    window.addEventListener('scroll', function() {
        checkSlideIn();
    });

    checkSlideIn(); // Initial check in case elements are already in view
});

document.addEventListener('DOMContentLoaded', () => {
    const backgroundDotsContainer = document.getElementById('backgroundDotsContainer');
    if (!backgroundDotsContainer) {
        console.error('backgroundDotsContainer not found');
        return;
    }
    const backgroundDots = [];

    // Create background dots
    for (let i = 0; i < 50; i++) {
        const dot = document.createElement('div');
        dot.className = 'background-dot';
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        backgroundDotsContainer.appendChild(dot);
        backgroundDots.push(dot);
        console.log(`Dot created at (${dot.style.left}, ${dot.style.top})`); // Debug log
    }

    // Function to move background dots in straight lines
    function moveBackgroundDots() {
        const speed = 0.02; // Speed variable
        backgroundDots.forEach(dot => {
            let x = parseFloat(dot.style.left);
            let y = parseFloat(dot.style.top);

            if (!dot.dx || !dot.dy) {
                const angle = Math.random() * 2 * Math.PI; // Random angle for direction
                dot.dx = speed * Math.cos(angle); // Speed in x direction
                dot.dy = speed * Math.sin(angle); // Speed in y direction
            }

            x += dot.dx;
            y += dot.dy;

            if (x < 0 || x > 100) {
                dot.dx = -dot.dx; // Reverse direction on x-axis
                x = Math.max(0, Math.min(x, 100));
            }
            if (y < 0 || y > 100) {
                dot.dy = -dot.dy; // Reverse direction on y-axis
                y = Math.max(0, Math.min(y, 100));
            }

            dot.style.left = `${x}%`;
            dot.style.top = `${y}%`;
        });
    }

    // Move background dots at intervals
    setInterval(moveBackgroundDots, 20);
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = {
        homeButton: document.getElementById('home'),
        aboutButton: document.getElementById('about'),
        projectButton: document.getElementById('projectSection'),
        contactButton: document.getElementById('contact')
    };

    const buttons = {
        homeButton: document.getElementById('homeButton'),
        aboutButton: document.getElementById('aboutButton'),
        projectButton: document.getElementById('projectButton'),
        contactButton: document.getElementById('contactButton')
    };

    function updateActiveButton() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (const [buttonId, section] of Object.entries(sections)) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                buttons[buttonId].classList.add('active');
            } else {
                buttons[buttonId].classList.remove('active');
            }
        }
    }

    window.addEventListener('scroll', updateActiveButton);
    updateActiveButton(); // Initial check
});

window.onload = GetTimeReference;
