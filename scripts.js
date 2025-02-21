document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("meuFormulario");
    const input = document.getElementById("meuInput");
    const lista = document.getElementById("listaDeItens");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o recarregamento da página

        const valor = input.value.trim(); // Remove espaços extras

        if (valor !== "") {
            // Criar o contêiner do item
            const novoItem = document.createElement("div");
            novoItem.classList.add("item");

            // Criar o texto do item
            const textoItem = document.createElement("span");
            textoItem.textContent = valor;

            // Criar o botão de excluir (ícone da lixeira)
            const botaoExcluir = document.createElement("img");
            botaoExcluir.src = "assets/trash.svg"; // Caminho da imagem da lixeira
            botaoExcluir.alt = "Excluir";
            botaoExcluir.classList.add("lixeira");
            botaoExcluir.addEventListener("click", function () {
                lista.removeChild(novoItem);
                exibirAviso(); // Exibe o aviso
            });

            // Montar o item
            novoItem.appendChild(textoItem);
            novoItem.appendChild(botaoExcluir);
            lista.appendChild(novoItem);

            // Limpar o input após adicionar
            input.value = "";
        }
    });

    function exibirAviso() {
        // Criar elemento do aviso
        const aviso = document.createElement("div");
        aviso.classList.add("item-remocao","aviso-remocao"); // Mantém o mesmo estilo dos itens

        // Ícone de alerta (!)
        const icone = document.createElement("img");
        icone.src = "assets/alert.svg"; // Caminho do ícone de alerta
        icone.alt = "Alerta";
        icone.classList.add("icone-alerta");

        // Texto do aviso
        const textoAviso = document.createElement("span");
        textoAviso.textContent = " O item foi removido da lista";

        // Botão de fechar (X)
        const botaoFechar = document.createElement("img");
        botaoFechar.src = "assets/close.svg"; // Caminho do ícone de fechar
        botaoFechar.alt = "Fechar";
        botaoFechar.classList.add("fechar-aviso");
        botaoFechar.addEventListener("click", function () {
            lista.removeChild(aviso);
        });

        // Monta o aviso no mesmo formato dos itens
        aviso.appendChild(icone);
        aviso.appendChild(textoAviso);
        aviso.appendChild(botaoFechar);
        lista.appendChild(aviso);

    
        
    }
});
