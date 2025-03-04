document.addEventListener('DOMContentLoaded', (event) => {
    // Seletores
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Abrir/Fechar o dropdown menu
    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', () => {
            dropdownMenu.classList.toggle('show');
        });

        // Fechar o dropdown ao clicar fora
        document.addEventListener('click', (e) => {
            if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    }

    // Abrir/Fechar o menu de navegação (hamburguer)
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});