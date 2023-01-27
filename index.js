const formularioJogador = document.querySelector("#formulario-jogador");
const formularioJogadorCompleto = document.querySelector("#formulario-jogador-preenchido");

formularioJogador.addEventListener("submit", (e) => {

    const jogadorNome = document.querySelector("#jogador");
    const jogadorPersonagem = document.querySelector("#personagem");
    const jogadorClassse = document.querySelector("#classe");
    const jogadorIdade = document.querySelector("#idade");
    const jogadorGenero = document.querySelector("#genero");
    const jogadorRaca = document.querySelector("#raca");
    const jogadorAltura = document.querySelector("#altura");
    const jogadorPeso = document.querySelector("#peso");

    const jogador = {
        Nome: jogadorNome.value,
        Personagem: jogadorPersonagem.value,
        Classe: jogadorClassse.value,
        Raca: jogadorRaca.value,
        Genero: jogadorGenero.value,
        Idade: jogadorIdade.value,
        Altura: jogadorAltura.value,
        Peso: jogadorPeso.value
    };

    localStorage.setItem("jogador", JSON.stringify(jogador))
});

const checkDados = () => {
    const dadosJogador = localStorage.getItem("jogador")
    const objetoJogador = JSON.parse(dadosJogador)

    if (objetoJogador) {
        formularioJogador.style.display = "none";
        formularioJogadorCompleto.style.display = "grid";

        const jogadorSalvo = document.querySelector("#jogador-salvo");
        jogadorSalvo.textContent = objetoJogador.Nome
        const personagemSalvo = document.querySelector("#personagem-salvo");
        personagemSalvo.textContent = objetoJogador.Personagem
        const classeSalvo = document.querySelector("#classe-salvo");
        classeSalvo.textContent = objetoJogador.Classe
        const racaSalvo = document.querySelector("#raca-salvo");
        racaSalvo.textContent = objetoJogador.Raca
        const generoSalvo = document.querySelector("#genero-salvo");
        generoSalvo.textContent = objetoJogador.Genero
        const idadeSalvo = document.querySelector("#idade-salvo");
        idadeSalvo.textContent = objetoJogador.Idade
        const alturaSalvo = document.querySelector("#altura-salvo");
        alturaSalvo.textContent = objetoJogador.Altura
        const pesoSalvo = document.querySelector("#peso-salvo");
        pesoSalvo.textContent = objetoJogador.Peso
    } else {
        formularioJogador.style.display = "grid";
        formularioJogadorCompleto.style.display = "none";
    }

    document.getElementById("jogador-reset").onclick = function () {
        localStorage.removeItem("jogador");
        location.reload();
    }
}

checkDados();