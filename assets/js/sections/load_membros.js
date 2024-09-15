
function Card_Membros(data) {
    const container = document.getElementById('marketing');

    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'container_acessoria';

        const img = document.createElement('img');
        img.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s`; 
        div.appendChild(img);

        const name = document.createElement('h3');
        name.textContent = item.name;
        div.appendChild(name);

        const description = document.createElement('p');
        description.textContent = `Assessor de ${item.accessory}`;
        div.appendChild(description);

        container.appendChild(div);
    });
}

function loadDatas(){
    fetch('assets/json/members.json')
    .then(response => response.json())
    .then(members => {
        Card_Membros(members.marketing);
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

document.addEventListener('DOMContentLoaded', loadDatas);