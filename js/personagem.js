function calculaVida() {

    const vida = document.querySelector('#vida'),
        progressoVida = document.querySelector('.progresso__vida'),
        pontosVida = document.querySelector('.pontos-vida');
    pontosVida.textContent = vida.value

    document.getElementById("subtrai").addEventListener("click", function (event) {
        event.preventDefault()
        vida.value = vida.value - 1;
        progressoVida.style.setProperty('--progresso', vida.value)
        pontosVida.textContent = vida.value
    });

    document.getElementById("soma").addEventListener("click", function (event) {
        event.preventDefault()
        vida.value = Number(vida.value) + 1;
        progressoVida.style.setProperty('--progresso', vida.value);
        pontosVida.textContent = vida.value;
    })};


calculaVida()