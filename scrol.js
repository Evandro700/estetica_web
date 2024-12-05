// Função para verificar se o elemento está visível na tela
function checkScroll() {
    const elements = document.querySelectorAll('.scroll-txt, .scroll-image'); // Seleciona tanto o texto quanto a imagem

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top; // Posição do elemento
        const screenPosition = window.innerHeight; // Altura da tela

        // Se o elemento estiver visível, adiciona a classe 'visible'
        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
}

// Verifica sempre que o usuário rola a página
window.addEventListener('scroll', checkScroll);

// Chama a função uma vez no carregamento da página para verificar se algum elemento já está visível
checkScroll();
