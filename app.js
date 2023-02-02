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

// function searchPokemon {
//     const input, filter, ul, li, a, i, txtValue, pokename
//     input = document.querySelector('.search-bar');
//     filter = input.value.toUpperCase();
//     pokename = document.querySelector('h3');
//     for (let i = 0; i <= pokename.length; i++) {
//         a = pokename[i].get
//     }
// }

function getHTML() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    // return data.map((name) => generateHTML(name));
    // .then((data) => {
    //     newData = data.json();
        // console.log(newData);
        .then((data) => data.json())
    .then((allPokemon) => {
        // generateHTML(data);
        // getPokeData(data);
        allPokemon.results.forEach(function(pokemon) {
            getPokeData(pokemon)
        }
            
        )
    })
}

function getPokeData(pokemon) {
    const url = pokemon.url;
    fetch(url)
    .then((data) => data.json())
    // console.log(url);
    // console.log(pokemon);
    .then(function(data) {
        searchFilter(data)
        // console.log(data);
    })
}

const searchFilter = (data) => {
    // let pokeName = document.createElement('h3');
    // pokeName.innerHTML = data.name;

    let pokeName = data.name;

    let pokeId = data.id;

    let pokeTypes = data.types;

    let pokeAbilities = data.abilities

    // const mainContainer = document.querySelector('.allPokemonContainer');
    //  const pokeContainer = document.createElement('div');
    //  pokeContainer.classList.add('.poke_card'); 
    // const containers = document.querySelectorAll('.poke_card');
    const searchBar = document.querySelector('.search-bar');

    searchBar.addEventListener('keyup', (event) => {
        const pokeContainer = document.querySelectorAll('.pokeContainer');
        const value = event.target.value.toLowerCase();
        // console.log(pokeContainer);
        pokeContainer.forEach((container) => {
            // console.log(container);
        })
    })

    // searchBar.addEventListener('keyup', (event) => {
    //     const pokeContainer = document.createElement('div');
    //  pokeContainer.classList.add('.poke_card');
    //     const containers = document.querySelectorAll('.poke_card');
    //     const mainContainer = document.querySelector('.allPokemonContainer');
    //     const value = event.target.value.toLowerCase();
    //     containers.forEach((container) => {
    //         if (container.id.toLowerCase().includes(value)) {
    //             container.style.display = 'block';
    //         } else {
    //             container.style.display = 'none';
    //         }
    //     })
    //     // mainContainer.append(containers)
    // })

    // pokeContainer.append(pokemonInnerHTML);
    // mainContainer.append(pokeContainer);
    // pokeId.innerHTML = data.id;

    // let pokeTypes;
    // pokeTypes.innerHTML = data.types;

    // const pokemonInnerHTML = `<div class="pokeContainer">
    // <img srcset=${`https://nexus.traction.one/images/pokemon/pokemon/${pokeId}.png`}>
    //    <h3>${pokeName}</h3>
    //  <p>${pokeId}</p>
    //   <div class="flex-container">
    //   <div class="types">
    //    <h4>Types</h4>
    //    <ul>
    //     <li>${pokeTypes[0]}</li>
    //   <li>${pokeTypes[1]}</li>
    //    </ul>
    //    </div>
    //   <div class="Abilities">
    //   <h4>Abilities</h4>
    //  <ul>
    //  <li>${pokeAbilities[0]}</li>
    //   </li>${pokeAbilities[1]}</li>
    //   </ul>
    //   </div>
    //    </div>
    //  </div>`;
    
    //  pokeContainer.append(pokemonInnerHTML);
    //  mainContainer.append(pokeContainer);


    // console.log(pokeName, pokeId, pokeTypes, pokeAbilities);
}



// function getHTML(data) {
//     const searchFilter = (data) => {
//         // console.log(data);
//         const pokemon = data.json();
//         console.log(pokemon);
//     // const mainContainer = document.querySelectorAll('.allPokemonContainer');
//     // // const pokeContainer = document.createElement('div');
//     // // pokeContainer.classList.add('pokeContainer');
//     // pokeId = data.id;
//     // const searchBar = document.querySelector('.search-bar');
//     // searchBar.addEventListener('keyup', (event) => {
//     //   const value = event.target.value.toLowerCase();
//     //   mainContainer.forEach((container) => {
//     //     if (container.id.toLowerCase().includes(value)) {
//     //         container.style.display = 'block'
//     //     } else {
//     //         container.style.display = 'none'
//     //     }

//     //     const pokemonInnerHTML = `<div class="pokeContainer">
//     //     <img srcset=${`https://nexus.traction.one/images/pokemon/pokemon/${pokeId}.png`}>
//     //     <h3>${pokeName}</h3>
//     //     <p>${pokeId}</p>
//     //     <div class="flex-container">
//     //     <div class="types">
//     //     <h4>Types</h4>
//     //     <ul>
//     //     <li>${types[0]}</li>
//     //     <li>${types[1]}</li>
//     //     </ul>
//     //     </div>
//     //     <div class="Abilities">
//     //     <h4>Abilities</h4>
//     //     <ul>
//     //     <li>${abilities[0]}</li>
//     //     </li>${abilities[1]}</li>
//     //     </ul>
//     //     </div>
//     //     </div>
//     //     </div>`;

//     //     mainContainer.append(pokemonInnerHTML);
//     //   })
//     // // console.log(pokeContainer);
    
//     // })
//     // // console.log(data);
//     // // return data.map(({pokeName, pokeNumber, types, abilities}) => generateHTML(data))
    
// }

// searchFilter();




// function generateHTML(pokeName, pokeNumber, types, abilities) {
//     console.log(pokeName, pokeNumber, types, abilities);
// }

// function generateHTML(pokeName, pokeNumber, types, abilities) {
//     return `<div class="pokeContainer">
//             <img srcset=${`https://nexus.traction.one/images/pokemon/pokemon/${pokeId}.png`}>
//             <h3>${pokeName}</h3>
//             <p>${pokeNumber}</p>
//             <div class="flex-container">
//             <div class="types">
//             <h4>Types</h4>
//             <ul>
//             <li>${types[0]}</li>
//             <li>${types[1]}</li>
//             </ul>
//             </div>
//             <div class="Abilities">
//             <h4>Abilities</h4>
//             <ul>
//             <li>${abilities[0]}</li>
//             </li>${abilities[1]}</li>
//             </ul>
//             </div>
//             </div>
//             </div>`;
// }

// function noResultHTML() {}

// const input = document.querySelector('.search');


// const pokemonInnerHTML = `<div class="pokeContainer">
// <img srcset=${`https://nexus.traction.one/images/pokemon/pokemon/${pokeId}.png`}>
// <h3>${name}</h3>
// <p>${pokeId}</p>
// <div class="flex-container">
// <div class="types">
// <h4>Types</h4>
// <ul>
// <li>${types[0]}</li>
// <li>${types[1]}</li>
// </ul>
// </div>
// <div class="Abilities">
// <h4>Abilities</h4>
// <ul>
// <li>${abilities[0]}</li>
// </li>${abilities[1]}</li>
// </ul>
// </div>
// </div>
// </div>`;

// input.addEventListener('keyup', function(e) {
//     const currentword = e.target.value;
//     const filteredData = pokeData.filter((pokemon) => {
//         return (pokemon.name.includes(currentword) || pokemon.id.includes(currentword))
//     })
//     pokeContainer.append(pokemonInnerHTML)
// })
// function generateHTML(data) {
//     // console.log(newData)
//     // console.log(data)
//     // const input = document.querySelector('.search');
//     // input.value.toUpperCase();
//     let textValue;
//     const input = document.querySelector('.search').value;
//     input.toUpperCase();
//     input.filter(textValue.includes(currentValue))


// }

// function generateHTML() {
//     return `<div`
// }

getHTML();