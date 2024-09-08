function pesquisar() {
    
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = (document.getElementById("campo-pesquisa").value).toLowerCase()

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Informe o nome de algum livro.</p>"
        return 
    }

    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let dataLancamento = "";

    // mostra o livro encontrado se algum dado da pesquisa corresponde a esse livro
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        dataLancamento = dado.dataLancamento.toString().toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || dataLancamento.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <img src="${dado.img}" alt="${dado.titulo}" class="imagem-livro">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="data-lancamento-meta">Data de lançamento: ${formatarData(dado.dataLancamento)}</p>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nenhum livro foi encontrado</p>"
    }

    section.innerHTML = resultados;
}

function formatarData(data) {
    const opcoes = { ano: 'numeric', mes: 'long', dia: 'numeric' };
    return data.toLocaleDateString('pt-BR', opcoes);
}