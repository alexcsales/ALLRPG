const alertaContainer = document.querySelector(".alerta__container"),
  alertaConteudo = document.querySelector(".alerta__conteudo");
const formularioConta = document.querySelector("#formulario-conta"),
  formularioContaCompleto = document.querySelector("#formulario-conta-preenchido");
const contaNome = document.querySelector("#jogador"),
  contaPersonagem = document.querySelector("#personagem"),
  contaClassse = document.querySelector("#classe"),
  contaIdade = document.querySelector("#idade"),
  contaGenero = document.querySelector("#genero"),
  contaRaca = document.querySelector("#raca"),
  contaAltura = document.querySelector("#altura"),
  contaPeso = document.querySelector("#peso");

const linkPersonagem = document.getElementById('link__personagem');

function desabilitaLink() {
  linkPersonagem.setAttribute("href", "#");
  alertaContainer.style.display = "flex";
  alertaConteudo.style.display = "flex";
  alertaConteudo.innerHTML = `
  <p type="text">Crie uma conta ter acesso a todas as funcionalidades!!</p>
  <button id="alerta__botao" class="botao" type="submit">OK</button>
  `;
  const alertaBotao = document.querySelector("#alerta__botao");
  alertaBotao.addEventListener('click', (e) => {
    alertaContainer.style.display = "none";
  alertaConteudo.style.display = "none";
  })
}

formularioConta.addEventListener("submit", (e) => {
  e.preventDefault()

  const conta = {
    Nome: contaNome.value,
    Personagem: contaPersonagem.value,
    Classe: contaClassse.value,
    Raca: contaRaca.value,
    Genero: contaGenero.value,
    Idade: contaIdade.value,
    Altura: contaAltura.value,
    Peso: contaPeso.value
  };

  localStorage.setItem("conta", JSON.stringify(conta))
  alertaContainer.style.display = "flex";
  alertaConteudo.style.display = "flex";
  alertaConteudo.innerHTML = `
  <p>Parabéns!!!</p>
  <p type="text">sua conta foi criada</p>
  <button id="alerta__botao" class="botao" type="submit">OK</button>
  `;
  const alertaBotao = document.querySelector("#alerta__botao");
  alertaBotao.addEventListener('click', () => {
    location.reload()
  }

  )
});

const mostraDadosConta = () => {
  const dadosConta = localStorage.getItem("conta")
  const objetoConta = JSON.parse(dadosConta)

  if (objetoConta) {
    formularioConta.style.display = "none";
    formularioContaCompleto.style.display = "grid";

    const jogadorSalvo = document.querySelector("#jogador-salvo");
    jogadorSalvo.textContent = objetoConta.Nome
    const personagemSalvo = document.querySelector("#personagem-salvo");
    personagemSalvo.textContent = objetoConta.Personagem
    const classeSalvo = document.querySelector("#classe-salvo");
    classeSalvo.textContent = objetoConta.Classe
    const racaSalvo = document.querySelector("#raca-salvo");
    racaSalvo.textContent = objetoConta.Raca
    const generoSalvo = document.querySelector("#genero-salvo");
    generoSalvo.textContent = objetoConta.Genero
    const idadeSalvo = document.querySelector("#idade-salvo");
    idadeSalvo.textContent = objetoConta.Idade + " anos"
    const alturaSalvo = document.querySelector("#altura-salvo");
    alturaSalvo.textContent = objetoConta.Altura + "cm";
    const pesoSalvo = document.querySelector("#peso-salvo");
    pesoSalvo.textContent = objetoConta.Peso + "Kg";
  } else {
    formularioConta.style.display = "grid";
    formularioContaCompleto.style.display = "none";
    desabilitaLink();
  }

  document.getElementById("conta-reset").onclick = function () {
    localStorage.removeItem("conta");
    location.reload();
  }
}
mostraDadosConta();