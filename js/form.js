var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obterPacienteFormulario(form);
    
    var erros = validaPaciente(paciente);
    if(erros.length > 0){
        exibeMensagemErro(erros);
        return;
    }
    
    adicionaPacienteTabela(paciente);    
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function adicionaPacienteTabela(paciente) {
    var pacienteTr = montaTR(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obterPacienteFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTR(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {
    var erros = [];
    if(paciente.nome.length == 0) erros.push("Campo NOME não pode ser vazio!");
    if(paciente.peso.length == 0) erros.push("Campo PESO não pode ser vazio!");
    if(!validaPeso(paciente.peso)) erros.push("Valor PESO inválido!");
    if(paciente.altura.length == 0) erros.push("Campo ALTURA não pode ser vazio!");
    if(!validaAltura(paciente.altura)) erros.push("Valor ALTURA inválida!");
    if(paciente.gordura.length == 0) erros.push("Campo GORDURA não pode ser vazio!");
    return erros;
}

function exibeMensagemErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}