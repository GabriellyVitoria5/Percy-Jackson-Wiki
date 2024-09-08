// Função para exibir os resultados
function exibirResultados(pesquisa = "") {
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    // Itera sobre os dados e cria o HTML para os itens
    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let dataLancamento = dado.dataLancamento.toString().toLowerCase();

        if (!pesquisa || titulo.includes(pesquisa) || descricao.includes(pesquisa) || dataLancamento.includes(pesquisa)) {
            resultados += `
            <div class="item-resultado">
                <div class="imagem-container">
                    <img src="${dado.img}" alt="${dado.titulo}" class="imagem-livro">
                </div>
                <div class="conteudo-livro">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="data-lancamento">${formatarData(dado.dataLancamento)}</p>
                </div>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nenhum livro foi encontrado</p>";
    }

    section.innerHTML = resultados;
}

function formatarData(data) {
    const opcoes = { ano: 'numeric', mes: 'long', dia: 'numeric' };
    return data.toLocaleDateString('pt-BR', opcoes);
}

function pesquisar() {
    let campoPesquisa = (document.getElementById("campo-pesquisa").value).toLowerCase();
    exibirResultados(campoPesquisa);
}

// Exibir todos os resultados no início
function inicializar() {
    exibirResultados(); 
}

// Adiciona o evento de carregar a página
window.onload = inicializar;
