function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let resustados = "";
    for (let dado of dados) {
        resustados += `
    <div class="item-resultado">
        <h2>
            <a href="#">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">
        ${dado.descricao}
        </p>
        <a href="${dado.link}">Saiba mais</a>
    </div>`
    }
    section.innerHTML = resustados;
}

function pessoa() {
    let nome = "Ana";
    let idade = 10;
    let preco = 1.99;
    let usaOculos = true;
}


