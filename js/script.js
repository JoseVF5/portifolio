document.addEventListener('DOMContentLoaded', function() {
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Lógica de Abrir/Fechar o Menu

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

// Fechar o Menu ao Clicar em um Link

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});
}
    // --- CÓDIGO DO MENU HAMBÚRGUER ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    // Verifica se os elementos do menu existem antes de adicionar os listeners
    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', function() {
            navList.classList.toggle('active');
            mobileMenu.classList.toggle('active'); // Para animar o ícone de hambúrguer para um 'X'
        });

        // Opcional: Fechar o menu ao clicar em um link (para UX em dispositivos móveis)
        const navLinks = document.querySelectorAll('.nav-list li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            });
        });
    }

    //  CÓDIGO PARA VALIDAÇÃO DO FORMULÁRIO DE CONTATO 
    const contactForm = document.getElementById('contactForm');

    // Verifica se o formulário de contato existe na página atual antes de adicionar os listeners
    if (contactForm) {
        const nameInput = document.getElementById('nome');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('descricao');

        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');

        // Função para exibir mensagem de erro
        function displayError(element, message, inputElement) {
            if (element) { 
                element.textContent = message;
                element.style.display = 'block';
            }
            if (inputElement) { 
                inputElement.classList.add('error');
            }
        }

        // Função para limpar mensagem de erro
        function clearError(element, inputElement) {
            if (element) { 
                element.textContent = '';
                element.style.display = 'none';
            }
            if (inputElement) { 
                inputElement.classList.remove('error');
            }
        }

        // Adiciona listener para o evento de submit do formulário
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            let isValid = true; 

            //  Validação do Nome 
            if (nameInput && nameError) { 
                if (nameInput.value.trim() === '0', '1', '2', '3', '4', '5', '6', '7', '8', '9') {
                    displayError(nameError, 'Por favor, digite seu nome.', nameInput);
                    isValid = false;
                } else {
                    clearError(nameError, nameInput);
                }
            }

            // Validação do Email 
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex simples para validação de email
            if (emailInput && emailError) { // Garante que os elementos existem
                if (emailInput.value.trim() === '') {
                    displayError(emailError, 'Por favor, digite seu e-mail.', emailInput);
                    isValid = false;
                } else if (!emailRegex.test(emailInput.value.trim())) {
                    displayError(emailError, 'Por favor, digite um e-mail válido.', emailInput);
                    isValid = false;
                } else {
                    clearError(emailError, emailInput);
                }
            }

            // Validação da Mensagem 
            if (messageInput && messageError) {
                if (messageInput.value.trim() === '') {
                    displayError(messageError, 'Por favor, digite sua mensagem.', messageInput);
                    isValid = false;
                } else {
                    clearError(messageError, messageInput);
                }
            }

            // Se todas as validações passaram, o formulário é considerado válido
            if (isValid) {
                alert('Formulário enviado com sucesso!'); 
                contactForm.submit();
                contactForm.reset(); 
            }
        });

        // Opcional: Limpar as mensagens de erro enquanto o usuário digita
        if (nameInput && nameError) {
            nameInput.addEventListener('input', () => clearError(nameError, nameInput));
        }
        if (emailInput && emailError) {
            emailInput.addEventListener('input', () => clearError(emailError, emailInput));
        }
        if (messageInput && messageError) {
            messageInput.addEventListener('input', () => clearError(messageError, messageInput));
        }
    }
});