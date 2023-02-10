const alertaContainer = document.querySelector(".alerta__container"),
  alertaConteudo = document.querySelector(".alerta__conteudo");
const formularioUsuario = document.querySelector("#formulario-usuario"),
  formularioUsuarioCompleto = document.querySelector("#formulario-usuario-preenchido");
const usuarioNome = document.querySelector("#jogador"),
  usuarioPersonagem = document.querySelector("#personagem"),
  usuarioClassse = document.querySelector("#classe"),
  usuarioIdade = document.querySelector("#idade"),
  usuarioGenero = document.querySelector("#genero"),
  usuarioRaca = document.querySelector("#raca"),
  usuarioAltura = document.querySelector("#altura"),
  usuarioPeso = document.querySelector("#peso");

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

formularioUsuario.addEventListener("submit", (e) => {
  e.preventDefault()

  const usuario = {
    Nome: usuarioNome.value,
    Personagem: usuarioPersonagem.value,
    Classe: usuarioClassse.value,
    Raca: usuarioRaca.value,
    Genero: usuarioGenero.value,
    Idade: usuarioIdade.value,
    Altura: usuarioAltura.value,
    Peso: usuarioPeso.value
  };

  localStorage.setItem("usuario", JSON.stringify(usuario))
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

const mostraDadosUsuario = () => {
  const dadosUsuario = localStorage.getItem("usuario")
  const objetoUsuario = JSON.parse(dadosUsuario)

  if (objetoUsuario) {
    formularioUsuario.style.display = "none";
    formularioUsuarioCompleto.style.display = "grid";

    const jogadorSalvo = document.querySelector("#jogador-salvo");
    jogadorSalvo.textContent = objetoUsuario.Nome
    const personagemSalvo = document.querySelector("#personagem-salvo");
    personagemSalvo.textContent = objetoUsuario.Personagem
    const classeSalvo = document.querySelector("#classe-salvo");
    classeSalvo.textContent = objetoUsuario.Classe
    const racaSalvo = document.querySelector("#raca-salvo");
    racaSalvo.textContent = objetoUsuario.Raca
    const generoSalvo = document.querySelector("#genero-salvo");
    generoSalvo.textContent = objetoUsuario.Genero
    const idadeSalvo = document.querySelector("#idade-salvo");
    idadeSalvo.textContent = objetoUsuario.Idade + " anos"
    const alturaSalvo = document.querySelector("#altura-salvo");
    alturaSalvo.textContent = objetoUsuario.Altura + "cm";
    const pesoSalvo = document.querySelector("#peso-salvo");
    pesoSalvo.textContent = objetoUsuario.Peso + "Kg";
  } else {
    formularioUsuario.style.display = "grid";
    formularioUsuarioCompleto.style.display = "none";
    desabilitaLink();
  }

  document.getElementById("usuario-reset").onclick = function () {
    localStorage.removeItem("usuario");
    location.reload();
  }
}
mostraDadosUsuario();