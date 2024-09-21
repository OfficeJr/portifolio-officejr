function Card_Membros(data) {
    const container = document.querySelector('.container_selecione_acessoria');

    container.innerHTML = '';

    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'container_acessoria';

        const img = document.createElement('img');
        img.src = `assets/images/membros/${item.image}.JPG`;
        img.alt = `Foto de ${item.name}`;
        div.appendChild(img);

        const name = document.createElement('h3');
        name.textContent = item.name;
        div.appendChild(name);

        const description = document.createElement('p');
        description.textContent = item.accessory;
        div.appendChild(description);

        container.appendChild(div);
    });
}

