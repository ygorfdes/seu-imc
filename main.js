document.querySelector('.calc').addEventListener('click', calcIMC);

function calcIMC() {
    //RECEBE TODOS OS DADOS DO FORMULÁRIO
    let form = document.querySelector('.form');

    //OS DADOS DO USUÁRIO SÃO CONSIDERADOS STRINGS, POR ISSO É FEITA A CONVERSÃO
    let peso = parseInt(form.kg.value);
    let altura = ((parseInt(form.m.value) * 100) + parseInt(form.cm.value)) / 100;

    //CÁLCULO DO IMC
    let imc = peso / (altura * altura);
    alert(`Seu IMC é ${imc.toFixed(1)}`);
}