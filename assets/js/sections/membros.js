const select_acessoria = document.querySelector(".select_acessoria");
const btn_select_acessoria =document.querySelector(".btn_select_acessoria");
const select_acessoria_conteudo = document.querySelector(".select_acessoria_conteudo");
const options_acessoria = document.querySelector(".options_acessorias");
const icon_select_acessoria = document.querySelector(".icon_select_acessoria");
const acessorias = Array('Financeiro', 'Marketing', 'Projetos', 'Rercusos Humanos');
const acessoria_selecionada = document.querySelector(".acessoria_selecionada");

btn_select_acessoria.addEventListener("click", () => {
    select_acessoria_conteudo.classList.toggle("active");

    if(select_acessoria_conteudo.classList.contains("active")){
        icon_select_acessoria.classList.value = "";
    }else{
        icon_select_acessoria.classList.value = "";    
    }
});

var acessoria_atual = null;
function setAcessorias(){
    acessorias.forEach((acessoria) => {
        let li = document.createElement("li");
        li.textContent = acessoria;
        li.classList.add("li-text-membros");
        options_acessoria.appendChild(li);
        li.onclick = () => {
            acessoria_selecionada.textContent = li.textContent;
            if(li.textContent == acessoria_selecionada.textContent){
                li.style.backgroundColor = "#1c263d9d";
                if(acessoria_atual != null){
                    acessoria_atual.style.backgroundColor = "";
                }
            }
            acessoria_atual = li;
        }
    });   
}

setAcessorias();