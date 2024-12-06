// Configurazione di particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#00f3ff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#00f3ff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
    },
    retina_detect: true
});

// Seleziona l'elemento h1
const header = document.querySelector('h1');

// Funzione per attivare l'animazione del glitch
function activateGlitch() {
    header.classList.add('glitch-active');
    // Rimuovi l'animazione dopo 1 secondo
    setTimeout(() => {
        header.classList.remove('glitch-active');
    }, 1000); // 1000ms = 1s
}

// Attiva il glitch ogni minuto
setInterval(activateGlitch, 10000); // 60000ms = 1 minuto


// Gestione del toggle del tema light/dark
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

themeToggle.addEventListener('click', () => {
    root.classList.toggle('high-contrast');
    updateTheme();
});

function updateTheme() {
    if (root.classList.contains('high-contrast')) {
        document.body.style.setProperty('--dark-bg', '#ffffff');
        document.body.style.setProperty('--text-color', '#000000');
        document.body.style.setProperty('--neon-blue', '#0073cf');
        document.body.style.setProperty('--neon-purple', '#7d26cd');
    } else {
        document.body.style.setProperty('--dark-bg', '#0a0a0a');
        document.body.style.setProperty('--text-color', '#e0e0e0');
        document.body.style.setProperty('--neon-blue', '#00f3ff');
        document.body.style.setProperty('--neon-purple', '#9d00ff');
    }
}

updateTheme();

// Gestione dello scroll per modificare lo sfondo della nav
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = root.classList.contains('high-contrast')
            ? 'rgba(255, 255, 255, 0.9)'
            : 'rgba(10, 10, 10, 0.8)';
    } else {
        nav.style.background = 'transparent';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Seleziona l'elemento hamburger e il menu
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('nav');

    // Aggiungi l'evento di clic per il toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open'); // Aggiungi o rimuovi la classe 'open'
        nav.classList.toggle('open'); // Mostra o nascondi il menu
    });
});



