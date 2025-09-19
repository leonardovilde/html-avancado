let idParaEditar = resgatarHospedeIdDaUrl();

let campoNome = document.getElementById("nome");
let campoNascimento = document.getElementById("nascimento");
let campoObservacoes = document.getElementById("observacoes");
let campoCpf = document.getElementById("cpf");

function carregarHospedesDoLocalStorage() {
    let hospedesString = localStorage.getItem("hospedes");
    let hospedes = [];
    if (hospedesString !== null) {
        hospedes = JSON.parse(hospedesString);
    }
    return hospedes;
}

function carregarDadosDoHospede() {
    // Resgatar a lista de hóspedes do local storage
    let hospedes = carregarHospedesDoLocalStorage();
    // Filtrar o hóspede que tem o id que deve ser apagado
    let hospedeParaEditar = hospedes.filter(x => x.id === idParaEditar)[0];

    return hospedeParaEditar;
}

function resgatarHospedeIdDaUrl() {
    const parametros = new URLSearchParams(window.location.search);
    const idHospede = parametros.get("id");
    return idHospede;
}

function popularCampos() {
    const hospede = carregarDadosDoHospede();

    campoNome.value = hospede.nome;
    campoCpf.value = hospede.cpf;
    campoNascimento.value = hospede.nascimento;
    campoObservacoes.value = hospede.observacoes;
}

function armazenarDadosHospede($event) {
    $event.preventDefault();

    let nome = campoNome.value;
    let cpf = campoCpf.value;
    let nascimento = campoNascimento.value;
    let observacoes = campoObservacoes.value;

    let hospedes = carregarHospedesDoLocalStorage();

    // Obter o indice do hóspede que deve ser alterado
    let indice = hospedes.findIndex(x => x.id === idParaEditar);

    hospedes[indice].nome = nome;
    hospedes[indice].cpf = cpf;
    hospedes[indice].nascimento = nascimento;
    hospedes[indice].observacoes = observacoes;

    salvarLocalStorage(hospedes);

    window.location.href = "index.html"
}

function salvarLocalStorage(hospedes) {
    let hospedesString = JSON.stringify(hospedes);
    localStorage.setItem("hospedes", hospedesString);
}

popularCampos();