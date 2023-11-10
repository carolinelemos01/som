//Declaração/criação da função tocaSomCade
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
//criando a referências constante listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;
while(contador < listaDeTeclas.length){
    const  teclas = listaDeTeclas[contador]
    const efeito = teclas.classList[1];
    const idAudio = "#som_" + efeito;
    teclas.onclick = function(){
        tocaSom(idAudio)
    }
    contador = contador + 1;
    console.log(contador);
}