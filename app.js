function pesquisar() {
    
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    // criar um novo elemento HTML para cada resultado
    for (let dado of dados) {
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">Data de lançamento: ${formatarData(dado.dataLancamento)}</p>
            </div>
        `;
    }

    section.innerHTML = resultados;
}

function formatarData(data) {
    const opcoes = { ano: 'numeric', mes: 'long', dia: 'numeric' };
    return data.toLocaleDateString('pt-BR', opcoes);
}