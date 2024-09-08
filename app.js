function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    if (!campoPesquisa) {
        section.innerHTML = `<p class = "autopreenchido">Nada foi encontrado. Você precisa digitar o nome de um item, arma ou magia</p>`
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let dadinhos = "";
    let atributos = "";
    let danos = "";
    let escola = "";
    let nivel = "";
    //let tags = "";

    for (let dado of dados) {
       



        //tags = dado.tags.toLowerCase()


        if (dado.magia == false)
        {

            titulo = dado.titulo.toLowerCase()
            descricao = dado.descricao.toLowerCase()
            dadinhos = dado.Dado.toLowerCase()
            atributos = dado.Atributo.toLowerCase()
            danos = dado.dano.toLowerCase()


            if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || danos.includes(campoPesquisa) || atributos.includes(campoPesquisa) || dadinhos.includes(campoPesquisa))
            {

                
                resultados += `
                <div class="item-resultado">
                <h2>
                    Nome: ${dado.titulo}
                </h2>
                <p class="descricao-meta">
                    <strong>Descrição:</strong> ${dado.descricao}
                </p>
                <p>
                <div class = "categorias"> Dano: <div class = "item-evidencia"> ${dado.dano} </div></div>
                </p>
                <p>
                <div class = "categorias"> Preço: <div class = "item-evidencia"> ${dado.preco} PO</div></div>
                </p>
                <p>
                <div class = "categorias"> Atributo: <div class = "item-evidencia"> ${dado.Atributo} </div></div>
                </p>
                <p>
                <div class = "categorias"> Dados: <div class = "item-evidencia"> ${dado.Dado} </div></div>
                </p>
                <p>
                <div class = "categorias"> Alcance: <div class = "item-evidencia"> ${dado.Alcance} M </div></div>
                </p>
                </div>`;
            }


        }
        else
        {
            titulo = dado.titulo.toLowerCase()
            descricao = dado.descricao.toLowerCase()
            dadinhos = dado.Dado.toLowerCase()
            danos = dado.dano.toLowerCase()
            escola = dado.escola.toLowerCase()
            nivel = dado.nivel.toLowerCase()
            if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || danos.includes(campoPesquisa) || dadinhos.includes(campoPesquisa)
                || escola.includes(campoPesquisa) || nivel.includes(campoPesquisa))
            {
            resultados += `
                <div class="item-resultado">
                <h2>
                    Nome: ${dado.titulo}
                </h2>
                <p class="descricao-meta">
                    <strong>Descrição:</strong> ${dado.descricao}
                </p>
                <p>
                <div class = "categorias"> Dano: <div class = "item-evidencia"> ${dado.dano} </div></div>
                </p>
                <p>
                <div class = "categorias"> Escola: <div class = "item-evidencia"> ${dado.escola}</div></div>
                </p>
                <p>
                <div class = "categorias"> Nivel: <div class = "item-evidencia"> ${dado.nivel} </div></div>
                </p>
                <p>
                <div class = "categorias"> Dados: <div class = "item-evidencia"> ${dado.Dado} </div></div>
                </p>
                <p>
                <div class = "categorias"> Alcance: <div class = "item-evidencia"> ${dado.Alcance} M </div></div>
                </p>
                </div>`;
            }
        }
    }

    if (resultados == "") {
        resultados = `<p  class = "autopreenchido">Nada foi encontrado</p>`
    }

    section.innerHTML = resultados;
}




