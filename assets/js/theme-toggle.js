document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const htmlElement = document.documentElement;
    let currentTheme = localStorage.getItem('theme') || 'light';

    htmlElement.setAttribute('data-bs-theme', currentTheme);

    themeToggleBtn.addEventListener('click', function() {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        currentTheme = newTheme;
    });
});
