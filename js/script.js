// Função para carregar o menu externo
function loadMenu() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o menu:', error));
}

// Chamar a função para carregar o menu ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    loadMenu();
});
