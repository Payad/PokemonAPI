//Function to fetch 151 pokemon
function fetchPokemon(clickValue){
    let pokemonArr = [];
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`
        pokemonArr.push(fetch(url).then(data => data.json()))
    }
    // console.log(pokemonArr)
    //Promise.all to iterate over array and return a single array/Promise
    // Promise.all(pokemonArr).then(data => console.log(data))
    Promise.all(pokemonArr).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            id: result.id,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name),
        })).sort((a, b) => a.id > b.id ? 1 : -1)

        // console.log(pokemon.name)
        // let poketypes = pokemon.types.forEach((type) => {
        //     console.log(type)
        // })
        const filteredPokemonType = pokemon.filter((x) => x.type.includes(clickValue) ) 
        // console.log(clickValue)
        console.log(clickValue, filteredPokemonType)
        // console.log(pokemon);

        if (clickValue) {
            createPokeCard(filteredPokemonType)
        } else {
            createPokeCard(pokemon)
        }
        // createPokeCard(filteredPokemonType);
    });
    
};


typeFilter();
// a filter for iterating through pokemon types
function typeFilter(pokemon) {
    const filterBtn = document.querySelectorAll('.filter-btn');
    filterBtn.forEach(function(btn) {
        btn.addEventListener('click', (e) => {
            // let type = e.currentTarget.innerText;
            // console.log(type);
            // let value = e.currentTarget.innerText;
            //REMEMBER THAT VALUE MEANS VALUE ATTRIBUTE OF ELEMENT //value=""//
            let value = e.currentTarget.value.toLowerCase().trim();
            // console.log(value);
            fetchPokemon(value);
        })
    });
    // console.log(pokemon);
}

fetchPokemon();

    //Create pokemon div and display pokemon 
    const createPokeCard = (pokemon) => {
       const allPokemonContainer = document.querySelector('.allPokemonContainer');
    //    const pokemonInnerHTML = pokemon.map((pokemon) => 
    //    `<div class="pokeContainer">
    //    <iage src="${pokemon.image}">
    //    <image srcset=${`https://nexus.traction.one/images/pokemon/pokemon/${pokemon.id}.png`}>
    //    <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
    //    <p>${pokemon.type}</p>
    //    </div>`
       
    //    ).join('');
    const pokemonInnerHTML = pokemon.map((pokemon) => 
    `<img srcset=${`https://nexus.traction.one/images/pokemon/pokemon/${pokemon.id}.png`}>
        <h3>${pokemon.name}</h3>
      <p>${pokemon.id}</p>
       <div class="flex-container">
       <div class="types">
       <h4>Types</h4>
        <ul>
        <li>${pokemon.type}</li>
      <li>$pokemon.type}</li>
       </ul>
        </div>
       <div class="Abilities">
      <h4>Abilities</h4>
      <ul>
      <li>$pokeAbilities}</li>
      </li>$pokeAbilities}</li>
      </ul>
      </div>
        </div>`
    
    ).join('');
       allPokemonContainer.innerHTML = pokemonInnerHTML;
        searchFilter()
        // typeFilter(pokemon)
        idAsc(pokemon)
        idDesc(pokemon)
        // resetPokemon(pokemon)
}

//Search filter for displaying Pokemon
const searchFilter = () => {
    const searchBar = document.querySelector('.search-bar');
    const pokeContainer = document.querySelectorAll('.pokeContainer');
    searchBar.addEventListener('keyup', (event) => {
        let value = event.target.value.toLowerCase();
        // console.log(value)
        pokeContainer.forEach((container) => {
            if (container.querySelector('h2').textContent.toLowerCase().includes(value)) {
                container.style.display = 'block'
            } else {
                container.style.display = 'none'
            }
        })
        // console.log('Hello')
        // console.log(search);
    })
}


//function for sorting pokemon in Ascending order
function idAsc(pokemon) {
    const btnAsc = document.querySelector('.sortAscending');
    btnAsc.addEventListener('click', () => Ascending(pokemon))
    function Ascending(pokemon) {
        pokemon.sort((a, b) => a.id - b.id);
        createPokeCard(pokemon)
    }
    
}

//functon for sorting pokemon in Descending order
function idDesc(pokemon) {
const btnDsc = document.querySelector('.sortDescending');
btnDsc.addEventListener('click', () => Descending(pokemon))
function Descending(pokemon) {
    pokemon.sort((a, b) => b.id - a.id);
    createPokeCard(pokemon);
}
}

function reset() {
    const reset = document.querySelector('.reset');
    const allPokemonContainer = document.querySelector('.allPokemonContainer');
    reset.addEventListener('click', () => {
        fetchPokemon();
        // console.log(reset);
    })
}
// resetPokemon();
reset();