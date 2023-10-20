//Declaração/criação da função tocaSomCade
function tocaSomCade() {
    document.querySelector('#som_tecla_cade').play();
}
//chamada ou invocação da função tocaSomCade ao clicar no botão
document.querySelector('.tecla_cade').onclick = tocaSomCade;

//Declaração/criação da função tocaSomIsso
function tocaSomIsso() {
    document.querySelector('#som_tecla_isso').play();
}
//chamada ou invocação da função tocaSomComo ao clicar no botão
document.querySelector('.tecla_como').onclick = tocaSomComo;
//Declaração/criação da função tocaSomComo
function tocaSomComo() {
    document.querySelector('#som_tecla_como').play();
}
//chamada ou invocação da função tocaSomComo ao clicar no botão
document.querySelector('.tecla_como').onclick = tocaSomComo;

