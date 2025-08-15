document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
    botaoDeAcessibilidade.addEventListener('click', function(){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
        })
   
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    
let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    // Novo código para mudar as cores
    const mudaCorBotao = document.getElementById('mudar-cor');

    // Lista de temas de cores com bom contraste
    const temasDeCores = [
        { fundo: '#FFFFFF', texto: '#000000' }, // Padrão: Preto no Branco
        { fundo: '#FF6600', texto: '#FFFFFF' }, // Laranja no Branco
        { fundo: '#000000', texto: '#FF6600' }  // Laranja no Preto (Modo Escuro)
    ];

    let indiceTemaAtual = 0;

    mudaCorBotao.addEventListener('click', function() {
        // Avança para o próximo tema na lista
        indiceTemaAtual = (indiceTemaAtual + 1) % temasDeCores.length;

        // Aplica as cores do tema atual ao corpo do documento
        const temaSelecionado = temasDeCores[indiceTemaAtual];
        document.body.style.backgroundColor = temaSelecionado.fundo;
        document.body.style.color = temaSelecionado.texto;
    });
});
