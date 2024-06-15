function createNavigationButtons() {
    const navigationLinks = [
        { text: 'Home', url: '/' },
        { text: 'Add Student', url: '/addStudent' },
        { text: 'Add Teacher', url: '/addTeacher' },
        { text: 'Login Student', url: '/login' },
        { text: 'Register', url: '/reg' },
        { text: 'Weather', url: '/weather' },
        { text: 'Bitly', url: '/bitly_page' },
        { text: 'Game', url: '/game' }
    ];

    const container = document.createElement('div');
    container.className = 'navigations';

    navigationLinks.forEach(link => {
        const button = document.createElement('button');
        button.className = 'navigation-button';
        button.textContent = link.text;
        button.onclick = () => {
            window.location.href = link.url;
        };
        container.appendChild(button);
    });

    return container;
}

document.addEventListener('DOMContentLoaded', () => {
    const navigationContainer = createNavigationButtons();
    const header = document.getElementById('header-container');
    header.appendChild(navigationContainer);
});
