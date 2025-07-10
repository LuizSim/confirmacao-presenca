document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.container, .welcome-container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    containers.forEach(container => observer.observe(container));

    const button = document.querySelector('button');
    button.addEventListener('click', function () {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });
});