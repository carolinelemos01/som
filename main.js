/Declaração/criação da função tocaSomCade
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//criando a referências constante listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
//criação da repetição "while" e trocado pelo "for" com variavel, condição e incremento
for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const  teclas = listaDeTeclas[contador]; //guarda o cantador da lista 
    const efeito = teclas.classList[1]; //chama o 2º item da classe individual do som
    const idAudio = `#som_${efeito}`; //utiliza a junção template string ${}
    teclas.onclick = function(){ //função anônima auxiliar para chamar tocaSom
        tocaSom(idAudio); //chamada da função tocaSom com parâmetro idAudio
    }