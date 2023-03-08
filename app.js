//Function to fetch 151 pokemon
function fetchPokemon(clickValue){
    let pokemonArr = [];
    for (let i = 1; i <= 251; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`
        pokemonArr.push(fetch(url).then(data => data.json()))
        // const h4 = document.createElement('h4');
    }
    //Promise.all to iterate over array and return a single array/Promise
    // Promise.all(pokemonArr).then(data => console.log(data))
    Promise.all(pokemonArr).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name.charAt(0).toUpperCase() + result.name.slice(1),
            id: result.id,
            image: result.sprites['front_default'],
            // type: result.types.map((type) => type.type.name).join('<br>'),
             type: result.types.map((type) => type.type.name),
             ability: result.abilities.map((ability) => ability.ability.name)
            // type: result.types.map((type) => console.log(type.type)),
            // type: result.types.forEach((type) => console.log(type)),
        })).sort((a, b) => a.id > b.id ? 1 : -1)

        const filteredPokemonType = pokemon.filter((x) => x.type.includes(clickValue) ) 
        // console.log(clickValue)
        console.log(clickValue, filteredPokemonType)

        if (clickValue) {
            createPokeCard(filteredPokemonType)
        } else {
            createPokeCard(pokemon, results)
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
// genPokemon(pokemon)
    //Create pokemon div and display pokemon 
    const createPokeCard = (pokemon, results) => {
       const allPokemonContainer = document.querySelector('.allPokemonContainer');
    //    const pokemonInnerHTML = pokemon.map((pokemon) => 
    //    `<div class="pokeContainer">
    //    <iage src="${pokemon.image}">
    //    <image srcset=${`https://nexus.traction.one/images/pokemon/pokemon/${pokemon.id}.png`}>
    //    <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
    //    <p>${pokemon.type}</p>
    //    </div>`
       
    //    ).join('');
   
//    createPokeCard(results)
////h4 class="Gen"></h4><h4 class="Gen2"></h4
    const pokemonInnerHTML = pokemon.map((pokemon) => 
    `<div class="pokeContainer" id="${pokemon.id}">
    <img class="pokeImg" srcset=${`https://nexus.traction.one/images/pokemon/pokemon/${pokemon.id}.png`}>
        <h3>${pokemon.name}</h3>
      <p>#${pokemon.id}</p>
       <div class="flex-container">
       <div class="types">
       <h4>Types</h4>
        <ul class="types">
        <li class="type">${pokemon.type[0]}</li>
        <li class="type">${pokemon.type[1]}</li>
       </ul>
        </div>
       <div class="Abilities">
      <h4>Abilities</h4>
      <ul>
      <li class="ability">${pokemon.ability[0]}</li>
      <li class="ability">${pokemon.ability[1]}</li>
      </ul>
      </div>
        </div>
        </div>`
    
    ).join('');
       allPokemonContainer.innerHTML = pokemonInnerHTML;
        searchFilter()
        // typeFilter(pokemon)
        idAsc(pokemon)
        idDesc(pokemon)
        
        // resetPokemon(pokemon)
        // const ul = document.querySelector('.types');
        // const h4 = document.createElement('h4')
        // const genPokemon = (pokemon) => {
        // }
        const typeLi = document.querySelectorAll('.type');
        typeLi.forEach((typeLi) => {
        if (typeLi.innerHTML === "grass") {
            typeLi.style.backgroundColor = 'rgb(0, 204, 0)'
        } else if (typeLi.innerHTML === "poison") {
            typeLi.style.backgroundColor = "rgb(153, 0, 153)"
        } else if (typeLi.innerHTML === "fire") {
            // typeLi.style.backgroundColor = "rgb(255, 0, 0)"
            typeLi.style.backgroundColor = "rgb(247 119 6)"
        } else if (typeLi.innerHTML === "bug") {
            typeLi.style.backgroundColor = "rgb(153, 153, 0)"
        } else if (typeLi.innerHTML === "water") {
            typeLi.style.backgroundColor = "rgb(0, 128, 255)"
        } else if (typeLi.innerHTML === "normal") {
            // typeLi.style.backgroundColor = "rgb(244, 244, 244)"
            typeLi.style.backgroundColor = "rgb(182, 175, 175)";
        } else if (typeLi.innerHTML === "fighting") {
            typeLi.style.backgroundColor = "rgb(102, 0, 51)"
        } else if (typeLi.innerHTML === "flying") {
            typeLi.style.backgroundColor = "rgb(102, 178, 255)"
        } else if (typeLi.innerHTML === "electric") {
            typeLi.style.backgroundColor = "rgb(255, 255, 0)"
            typeLi.style.textShadow = "#fc0 8px 0 10px"
        } else if (typeLi.innerHTML === "rock") {
            // typeLi.style.backgroundColor = "rgb(153, 153, 0)"
            typeLi.style.backgroundColor = "rgb(108, 108, 1)"
        } else if (typeLi.innerHTML === "psychic") {
            typeLi.style.backgroundColor = "rgb(255, 153, 153)"
        } else if (typeLi.innerHTML === "ground") {
            typeLi.style.backgroundColor = "rgb(204, 204, 0)"
        } else if (typeLi.innerHTML === "dragon") {
            typeLi.style.backgroundColor = "rgb(102, 0, 204)"
        } else if (typeLi.innerHTML === "fairy") {
            typeLi.style.backgroundColor = "rgb(255, 153, 255)"
        } else if (typeLi.innerHTML === "steel") {
            typeLi.style.backgroundColor = "rgb(192, 192, 192)"
        } else if (typeLi.innerHTML === "ghost") {
            typeLi.style.backgroundColor = "rgb(76, 0, 153)"
        } else if (typeLi.innerHTML === "ice") {
            // typeLi.style.backgroundColor = "rgb(204, 255, 255)"
            typeLi.style.backgroundColor = "rgb(135, 206, 250)"
        } else if (typeLi.innerHTML === "dark") {
            typeLi.style.backgroundColor = "rgb(51, 25, 0)"
        } else if (typeLi.innerHTML === "undefined") {
            typeLi.style.display = 'none'
    }})

    const abilityLi = document.querySelectorAll('.ability') 
    abilityLi.forEach((abilityLi) => {   
    if (abilityLi) {
        abilityLi.style.backgroundColor = "rgb(192, 192, 192)"
    } 
    if (abilityLi.innerHTML === "undefined") {
        abilityLi.style.display = "none"
    }
})
        
    }
    
//Search filter for displaying Pokemon
const searchFilter = () => {
    const searchBar = document.querySelector('.search-bar');
    const pokeContainer = document.querySelectorAll('.pokeContainer');
    searchBar.addEventListener('keyup', (event) => {
        let value = event.target.value.toLowerCase();
        // console.log(value)
        pokeContainer.forEach((container) => {
            if (container.querySelector('h3').textContent.toLowerCase().includes(value) || container.querySelector('p').textContent.includes(value)) {
                container.style.display = 'block'
            } else {
                container.style.display = 'none'
            }
        })
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
    // const allPokemonContainer = document.querySelector('.allPokemonContainer');
    reset.addEventListener('click', () => {
        fetchPokemon();
        // console.log(reset);
    })
}
// resetPokemon();
reset();