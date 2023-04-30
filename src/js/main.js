const controle = document.querySelectorAll('[data-controle]')

// 'forEach' percorre os itens do array
controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        // 'target' onde o click aconteceu (<button>)
        // 'dataset' pega o conteúdo de 'data-controle'
        // 'parentNode' pega a classe pai
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
})

function manipulaDados(operação, controle) {
    const peca = controle.querySelector('[data-contador]');

    if(operação === '-') {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}