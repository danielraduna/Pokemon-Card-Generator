let image = document.querySelector('.card-image');
let stats = document.querySelector('.card-stats')
let img = document.createElement('img');
let go = document.querySelector("#go");

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

go.addEventListener("click", function(){
    let number = Number(document.querySelector("#number").value);
    let url = "https://pokeapi.co/api/v2/pokemon/" + number;
    
    fetch(url)
    .then(response => response.json())
    .then(pokemon => {
        
        img.src = pokemon.sprites.front_default;
        img.width = 300;
        image.appendChild(img);

        let name = document.querySelector('#name');
        name.innerHTML = `Name: ${capitalizeFirstLetter(pokemon.name)}`;


        let type = document.querySelector('#type');
        let i;
        type.innerHTML = "Type: ";
        for(i of pokemon.types)
            type.innerHTML += `${capitalizeFirstLetter(i.type.name)} `;
        
        let hp = document.querySelector("#hp");
        hp.innerHTML = `HP: ${pokemon.stats[0].base_stat}`;

        let attack = document.querySelector("#attack");
        attack.innerHTML = `Attack: ${pokemon.stats[1].base_stat}`;

        let defense = document.querySelector("#defense");
        defense.innerHTML = `Defense: ${pokemon.stats[2].base_stat}`;

        let speed = document.querySelector("#speed");
        speed.innerHTML = `Speed: ${pokemon.stats[5].base_stat}`;

        let abilities = document.querySelector("#abilities");
        abilities.innerHTML = "Abilities: ";
        for(i of pokemon.abilities)
            abilities.innerHTML += `${capitalizeFirstLetter(i.ability.name)} `;
    });

    
});

let random = document.querySelector("#random");
random.addEventListener('click', function(){
    let number = parseInt(Math.random() * (398 - 1) + 1);
    document.querySelector("#number").value = number;
    let url = "https://pokeapi.co/api/v2/pokemon/" + number;
    
    fetch(url)
    .then(response => response.json())
    .then(pokemon => {
        
        img.src = pokemon.sprites.front_default;
        img.width = 300;
        image.appendChild(img);

        let name = document.querySelector('#name');
        name.innerHTML = `Name: ${capitalizeFirstLetter(pokemon.name)}`;


        let type = document.querySelector('#type');
        let i;
        type.innerHTML = "Type: ";
        for(i of pokemon.types)
            type.innerHTML += `${capitalizeFirstLetter(i.type.name)} `;
        
        let hp = document.querySelector("#hp");
        hp.innerHTML = `HP: ${pokemon.stats[0].base_stat}`;

        let attack = document.querySelector("#attack");
        attack.innerHTML = `Attack: ${pokemon.stats[1].base_stat}`;

        let defense = document.querySelector("#defense");
        defense.innerHTML = `Defense: ${pokemon.stats[2].base_stat}`;

        let speed = document.querySelector("#speed");
        speed.innerHTML = `Speed: ${pokemon.stats[5].base_stat}`;

        let abilities = document.querySelector("#abilities");
        abilities.innerHTML = "Abilities: ";
        for(i of pokemon.abilities)
            abilities.innerHTML += `${capitalizeFirstLetter(i.ability.name)} `;
    });

});
