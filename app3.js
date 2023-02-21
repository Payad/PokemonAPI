
function fetchPokemon () {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((data) => data.json())
    .then((pokemon) => {
        pokemon.results.forEach(function(result) {
            // console.log(result)
            getPokeData(result)
    })

    })
    // fetchPokemonData(pokemon)
}

function getPokeData(result) {
    // console.log(result);
    const url = result.url;
    fetch(url)
    .then((data) => data.json())
    .then(function(pokeData) {
        createPokeCard(pokeData)
        // console.log(pokeData)
    })

    // console.log(url);
}

function createPokeCard(pokeData) {
    console.log(pokeData)
    let allPokemonContainer = document.querySelector('.allPokemonContainer');
    const pokeContainer = document.createElement('div');
    pokeContainer.classList.add('pokeContainer');
    // const searchElement = document.querySelector('.search');
    // console.log(pokeData);
    let pokeName = pokeData.name;
    let pokeId = pokeData.id;
    let pokeTypes = pokeData.types[0].type.name;
    // let pokeTypes2 = pokeData.types[1].type.name;
    let pokeAbilities = pokeData.abilities[0].ability.name
    // let pokeAbilities2 = pokeData.abilities[1].name


//     const pokemonHTML = `<div class="pokemon__imageContainer" id="${pokeName}">
//     <img src="https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png" />
//   </div>
//   <div class="pokemon__infomationContainer">
//     <span class="pokemon__id">#${pokeId.toString().padStart(3, "0")}</span>
//     <h3 class="pokemon__name">${pokeName}</h3>
//     <small class="pokemon__type">Type: <span>${pokeTypes}</span></small>
//   </div>`;

    const pokemonInnerHTML = `<img srcset=${`https://nexus.traction.one/images/pokemon/pokemon/${pokeId}.png`}>
        <h3>${pokeName}</h3>
      <p>${pokeId}</p>
       <div class="flex-container">
       <div class="types">
       <h4>Types</h4>
        <ul>
        <li>${pokeTypes}</li>
      <li>${pokeTypes}</li>
       </ul>
        </div>
       <div class="Abilities">
      <h4>Abilities</h4>
      <ul>
      <li>${pokeAbilities}</li>
      </li>${pokeAbilities}</li>
      </ul>
      </div>
        </div>`;

    // const pokemonInnerHTML = `<div class="pokeContainer">
    // <img srcset=${`https://nexus.traction.one/images/pokemon/pokemon/${pokeId}.png`}>
    //    <h3>${pokeName}</h3>
    //  <p>${pokeId}</p>
    //   <div class="flex-container">
    //   <div class="types">
    //    <h4>Types</h4>
    //    <ul>
    //     <li>${pokeTypes}</li>
    //   <li>${pokeTypes}</li>
    //    </ul>
    //    </div>
    //   <div class="Abilities">
    //   <h4>Abilities</h4>
    //  <ul>
    //  <li>${pokeAbilities}</li>
    //   </li>${pokeAbilities}</li>
    //   </ul>
    //   </div>
    //    </div>
    //  </div>`;

     pokeContainer.innerHTML = pokemonInnerHTML;
     allPokemonContainer.append(pokeContainer)

    //ERROR WHEN INNERHTML DIRECTLY INTO ALLPOKEMONCONTAINER,
    // IT DISPLAYS ALL CARDS ON TOP OF EACH OTHER
    // allPokemonContainer.innerHTML = pokemonInnerHTML;
}

// function fetchPokemonData(pokemon) {
//     // const url = pokemon.url;
//     console.log(pokemon)
// }

fetchPokemon();

// const fetchPokemon = () => {
//     const promises = [];
//     for (let i = 1; i <= 150; i++) {
//         const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
//         promises.push(fetch(url).then((res) => res.json()));
//     }
//     Promise.all(promises).then((results) => {
//         const pokemon = results.map((result) => ({
//             name: result.name,
//             image: result.sprites['front_default'],
//             type: result.types.map((type) => type.type.name).join(', '),
//             id: result.id
//         }));
//         // displayPokemon(pokemon);
//     });
// };
//  fetchPokemon();