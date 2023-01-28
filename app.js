function fetchKantoPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    // .then(data => data.json())
    // .then(data => console.log(data))
    .then((data) => data.json())
    // .then((data) => {
    //     console.log(data);
    // })
    .then((allPokemon) => {
        allPokemon.results.forEach(function(pokemon) {
        fetchPokemonData(pokemon)
        // console.log(allPokemon)
        })
    })
    .catch((e) => {
        console.log(e);
    })
}

function fetchPokemonData(pokemon) {
    // pokemon.results.forEach(function(pokemon) {

    // })
    let url = pokemon.url;
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData) {
        renderPokemon(pokeData)
        // console.log(pokeData)
    })
    // allPokemon.results.forEach(function(pokemon) {
    //     // console.log(pokemon)
    //     renderPokemon(pokemon)
    // })
}
   
function renderPokemon(pokeData) {
    let allPokemonContainer = document.querySelector('.allPokemonContainer');
    let pokeContainer = document.createElement('div');
    pokeContainer.classList.add('pokeContainer');

    let pokeName = document.createElement('h3');
    pokeName.innerHTML = pokeData.name;

    let pokeNumber = document.createElement('p')
    pokeNumber.innerHTML = `#${pokeData.id}`

    const category = document.createElement('div');
    category.classList.add('flex-container');
    // category.append(typeContainer);
    // category.append(abiliContainer);

    let pokeTypes = document.createElement('ul');

    const typeContainer = document.createElement('div');
    typeContainer.classList.add('types');
    const typeHeader = document.createElement('h4');
    typeHeader.innerHTML = 'Types';
    typeContainer.append(typeHeader);
    typeContainer.append(pokeTypes);


    let pokeAbilities = document.createElement('ul');

    const abiliContainer = document.createElement('div');
    abiliContainer.classList.add('Abilities');
    abilHeader = document.createElement('h4');
    abilHeader.innerHTML = 'Abilities';
    abiliContainer.append(abilHeader);
    abiliContainer.append(pokeAbilities);

    createTypes(pokeData.types, pokeTypes)

    createPokeImage(pokeData.id, pokeContainer)

    createAbilities(pokeData.abilities, pokeAbilities)

    category.append(typeContainer);
    category.append(abiliContainer);

    // pokeContainer.append(pokeName, pokeNumber, typeContainer, abiliContainer);
    pokeContainer.append(pokeName, pokeNumber, category);

    allPokemonContainer.append(pokeContainer);


}

function createTypes(types, ul) {
    types.forEach(function(type) {
        let typeLi = document.createElement('li');
        typeLi.innerHTML = type['type']['name'];
        ul.append(typeLi);

        // if (typeLi.innerHTML === 'grass') {
        //     typeLi.style.backgroundColor = 'rgb(0, 204, 0)';
        // }
        if(typeLi.innerHTML === 'grass') {
            // document.body.backgroundColor = 'red';
            console.log(typeLi);
            typeLi.style.backgroundColor = 'rgb(0, 204, 0)';
        } else if (typeLi.innerHTML === 'poison') {
            typeLi.style.backgroundColor = 'rgb(153, 0, 153)';
        } else if (typeLi.innerHTML === 'fire') {
            typeLi.style.backgroundColor = 'rgb(255, 0, 0)';
        } else if (typeLi.innerHTML === 'bug') {
            typeLi.style.backgroundColor = 'rgb(153, 153, 0)';
        } else if (typeLi.innerHTML === 'water') {
            typeLi.style.backgroundColor = 'rgb(0, 128, 255)';
        } else if (typeLi.innerHTML === 'normal') {
            typeLi.style.backgroundColor = 'rgb(224, 224, 224)';
        } else if (typeLi.innerHTML === 'fighting') {
            typeLi.style.backgroundColor = 'rgb(102, 0, 51)';
        } else if (typeLi.innerHTML === 'flying') {
            typeLi.style.backgroundColor = 'rgb(102, 178, 255)';
        } else if (typeLi.innerHTML === 'electric') {
            typeLi.style.backgroundColor = 'rgb(255, 255, 0)';
        } else if (typeLi.innerHTML === 'rock') {
            typeLi.style.backgroundColor = 'rgb(153, 153, 0)';
        } else if (typeLi.innerHTML === 'psychic') {
            typeLi.style.backgroundColor = 'rgb(255, 153, 153)';
        } else if (typeLi.innerHTML === 'ground') {
            typeLi.style.backgroundColor = 'rgb(204, 204, 0)';
        } else if (typeLi.innerHTML === 'dragon') {
            typeLi.style.backgroundColor = 'rgb(102, 0, 204)';
        } else if (typeLi.innerHTML === 'fairy') {
            typeLi.style.backgroundColor = 'rgb(255, 153, 255)';
        } else if (typeLi.innerHTML === 'steel') {
            typeLi.style.backgroundColor = 'rgb(192, 192, 192)';
        } else if (typeLi.innerHTML === 'ghost') {
            typeLi.style.backgroundColr = 'rgb(76, 0, 153)';
        } else if (typeLi.innerHTML === 'ice') {
            typeLi.style.backgroundColor = 'rgb(204, 255, 255)';
        } else if (typeLi.innerHTML === 'dark') {
            typeLi.style.backgroundColor = 'rgb(51, 25, 0)';
        }
    })
}

function createPokeImage(pokeId, pokeContainer) {
    let pokeImage = document.createElement('img');
    // pokeImage.srcset = `https://pokeapi.glitch.me/v1/pokemon/${pokeId}`;
    // pokeImage.srcset = `https://pokeapi.glitch.me/v1/pokemon/1/`;

    //GITHUB POKEMON IMAGE SPRITE
    // pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokeId}.png`;
    //NEXUS POKEMONN IMAGE SPRITE
    pokeImage.srcset = `https://nexus.traction.one/images/pokemon/pokemon/${pokeId}.png`

    pokeContainer.append(pokeImage);
}

function createAbilities(abilities, ul){
    abilities.forEach(function(ability) {
        let abilityLi = document.createElement('li');
        // console.log(abilityLi);
        abilityLi.innerHTML = ability['ability']['name'];
        ul.append(abilityLi);

        if (abilityLi) {
            abilityLi.style.backgroundColor = 'rgb(192, 192, 192)';
        }
    })
}

// function createAbilities(pokeAbilities, ul) {
//    pokeAbilities.forEach(function(ability) {
//     let abilityLi = document.createElement('li');
//     ability.innerHTML = ability['ability']['name'];
//     ul.append(abilityLi);
    
//    })
    // let abilities = document.createElement('ul');
    // abilities.innerHTML = ability['ability']['name']
// }


fetchKantoPokemon();

// if(pokemon.types === 'grass') {
//     document.body.style.backgrounColor = 'red';
// }