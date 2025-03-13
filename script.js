// GSAP Анимации
gsap.from('.header', { y: -100, duration: 1, ease: 'power3.out' });

// Анимация hero-секции
gsap.from('.hero-title', { opacity: 0, y: 50, duration: 1.2, ease: 'power3.out', delay: 0.5 });
gsap.from('.hero-text', { opacity: 0, y: 30, duration: 1, ease: 'power3.out', stagger: 0.3, delay: 0.8 });
// Анимация кнопки "Связаться со мной"
gsap.from('.hero-btn', {
    opacity: 0, // Начальная прозрачность
    scale: 0.5, // Начальный размер
    y: 30, // Смещение вниз
    duration: 1, // Длительность анимации
    ease: 'power3.out', // Плавность
    delay: 1.2, // Задержка перед началом анимации
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Частицы в hero
const particlesContainer = document.querySelector('.hero-particles');
const colors = ['#00c6ff', '#ff00aa', '#00ff88', '#ffcc00'];

for (let i = 0; i < 60; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.animationDuration = Math.random() * 3 + 2 + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    particlesContainer.appendChild(particle);

    gsap.to(particle, {
        y: -100,
        x: Math.random() * 100 - 50,
        rotation: Math.random() * 360,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
    });
}

// Анимация секций при прокрутке
gsap.utils.toArray('.section').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
    });
});

// Анимация навыков
gsap.from('.skill-item', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: 'bounce.out',
    scrollTrigger: {
        trigger: '.skills-list',
        start: 'top 80%',
        toggleActions: 'play none none none',
    },
});

// Анимация опыта работы
gsap.from('.job', {
    opacity: 0,
    x: -100,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.job',
        start: 'top 80%',
        toggleActions: 'play none none none',
    },
});

gsap.from('.job-list li', {
    opacity: 0,
    x: 50,
    duration: 1,
    stagger: 0.3,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.job-list',
        start: 'top 80%',
        toggleActions: 'play none none none',
    },
});

// Анимация контактов
gsap.from('.contact-info p', {
    opacity: 0,
    x: -100,
    duration: 1,
    stagger: 0.3,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.contact-info',
        start: 'top 80%',
        toggleActions: 'play none none none',
    },
});

// Параллакс для hero
gsap.to('.hero', {
    backgroundPosition: '50% 100%',
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
    },
});

// Анимация кнопки "Связаться со мной"
gsap.to('.hero-btn', {
    scale: 1.1,
    backgroundColor: '#00c6ff',
    color: '#000',
    borderRadius: '50%',
    rotation: 360,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
});

// Танцующая кнопка при наведении
document.querySelector('.hero-btn').addEventListener('mouseenter', () => {
    gsap.to('.hero-btn', {
        y: -10,
        rotation: 10,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: 'power1.inOut',
    });
});

// Анимация header
gsap.to('.header', {
    opacity: 0.8,
    duration: 0.5,
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
    },
});

