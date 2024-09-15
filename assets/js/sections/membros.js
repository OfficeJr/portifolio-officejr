const select_acessoria = document.querySelector(".select_acessoria");
const btn_select_acessoria = document.querySelector(".btn_select_acessoria");
const select_acessoria_conteudo = document.querySelector(".select_acessoria_conteudo");
const options_acessoria = document.querySelector(".options_acessorias");
const icon = document.querySelector(".fi.fi-br-caret-down");
const acessorias = Array('Financeiro', 'Marketing', 'Projetos', 'Rercusos Humanos', 'Comercial');
const acessoria_selecionada = document.querySelector(".acessoria_selecionada");

btn_select_acessoria.addEventListener("click", () => {
    select_acessoria_conteudo.classList.toggle("active");

    if (select_acessoria_conteudo.classList.contains("active")) {
        icon.style.transform = "rotate(180deg)";
    } else {

        icon.style.transform = "rotate(0)";
    }
});

var acessoria_atual = null;

function setAcessorias() {
    acessorias.forEach((acessoria) => {
        let li = document.createElement("li");
        li.textContent = acessoria;
        li.classList.add("li-text-membros");
        options_acessoria.appendChild(li);
        li.onclick = () => {
            acessoria_selecionada.textContent = li.textContent;
            if (li.textContent == acessoria_selecionada.textContent) {
                li.style.backgroundColor = "#1c263d9d";
                if (acessoria_atual != null) {
                    acessoria_atual.style.backgroundColor = "";
                }
            }
            acessoria_atual = li;
        }
    });
}

setAcessorias();