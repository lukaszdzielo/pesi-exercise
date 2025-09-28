

const openMenuBtn = document.getElementById('openMenuBtn');
const menu = document.getElementById('menuWrapper');

if (openMenuBtn && menu) {
    openMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', () => {
        if (!menu.classList.contains('hidden')) menu.classList.add('hidden');
    });

    menu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}