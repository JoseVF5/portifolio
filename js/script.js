document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (mobileMenu && navList) { // Certifica-se de que os elementos existem antes de adicionar o listener
        mobileMenu.addEventListener('click', function() {
            navList.classList.toggle('active');
            mobileMenu.classList.toggle('active'); // ESSA LINHA É CRÍTICA para a animação do "X"
        });

        // Opcional: Fechar o menu ao clicar em um link
        const navLinks = document.querySelectorAll('.nav-list li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    mobileMenu.classList.remove('active'); // Também remove a classe 'active' do menu-toggle ao fechar
                }
            });
        });
    }
});