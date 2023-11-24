document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleDarkModeBtn = document.querySelector('.toggle-dark-mode-btn');

    toggleDarkModeBtn.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });

    // Check if dark mode is preferred by the user or system
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function toggleDarkModeBasedOnSystemPreference() {
        if (darkModeMediaQuery.matches) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }

    toggleDarkModeBasedOnSystemPreference();

    // Update dark mode when the system preference changes
    darkModeMediaQuery.addEventListener('change', toggleDarkModeBasedOnSystemPreference);
});

