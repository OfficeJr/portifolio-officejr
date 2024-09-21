
function loadDatas() {
    fetch('assets/json/members.json')
        .then(response => response.json())
        .then(members => {
            membersData = members;
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

const select_acessoria = document.querySelector(".select_acessoria");
const btn_select_acessoria = document.querySelector(".btn_select_acessoria");
const select_acessoria_conteudo = document.querySelector(".select_acessoria_conteudo");
const options_acessoria = document.querySelector(".options_acessorias");
const icon = document.querySelector(".fi.fi-br-caret-down");
const acessorias = Array('Diretoria', 'Finanças', 'Marketing', 'Projetos', 'Recursos Humanos');
const acessoria_selecionada = document.querySelector(".acessoria_selecionada");

btn_select_acessoria.addEventListener("click", () => {
    select_acessoria_conteudo.classList.toggle("active");

    if (select_acessoria_conteudo.classList.contains("active")) {
        icon.style.transform = "rotate(180deg)";
    } else {
        icon.style.transform = "rotate(0)";
    }
});

let acessoria_atual = null;

function setAcessorias() {
    acessorias.forEach((acessoria) => {
        let li = document.createElement("li");
        li.textContent = acessoria;
        li.classList.add("li-text-membros");

        li.onclick = () => {
            if (acessoria_atual) {
                acessoria_atual.style.backgroundColor = "";
            }

            acessoria_selecionada.textContent = li.textContent;
            li.style.backgroundColor = "#1c263d9d";
            acessoria_atual = li;
            
            select_acessoria_conteudo.classList.remove("active")
            icon.style.transform = "rotate(0)";

            const acessoria_lower = li.textContent.toLowerCase(); 
            Card_Membros(membersData[acessoria_lower]);
        };

        options_acessoria.appendChild(li);
    });
}

setAcessorias();
loadDatas();
