//Function to fetch 151 pokemon
function fetchPokemon(clickValue){
    let pokemonArr = [];
    for (let i = 1; i <= 10; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`
        pokemonArr.push(fetch(url).then(data => data.json()))
    }
    // console.log(pokemonArr)
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

        // console.log(pokemon)
        // console.log(results)

        // console.log(types);
        // const newType = results.types;
        // console.log(newType)
        // console.log(pokemon.type)
        // let poketypes = results.types.forEach((type) => {
        //     console.log(type)
        // })

        // const ul = document.querySelector('.types')
        // const pokemon1 = results.map((result) => ({
        //     name: result.name,
        //     id: result.id,
        //     image: result.sprites['front_default'],
        //     // type: result.types.map((type) => type.type.name).join('<br>'),
        //     // type: result.types.map((type) => type.type.name).join(','),
        //     // type: result.types.map((type) => console.log(type))
        //     // type: result.types.map((type) => console.log(type)),
        //     type: result.types.forEach((types) => {
        //         const ul = document.querySelector('.types')
        //         const typeLi = document.createElement('li')
        //         typeLi.innerHTML = types.type.name;
        //         console.log(typeLi)
        //         // ul.append(pokemon1.type);
        //         console.log(ul)
                
        //     }),
        //     // type: result.types.forEach((type) => console.log(type)),
        // }))

        const filteredPokemonType = pokemon.filter((x) => x.type.includes(clickValue) ) 
        // console.log(clickValue)
        console.log(clickValue, filteredPokemonType)
        // console.log(pokemon);


        // console.log(results)

        // createPokeTypes(results)

        // console.log(pokemon.type)
        // createTypes(pokemon.type, pokeType)

        if (clickValue) {
            createPokeCard(filteredPokemonType)
        } else {
            createPokeCard(pokemon, results)
        }
        // createPokeCard(filteredPokemonType);
    });
    
    
};

//  function createPokeTypes(results, ul) {
//     // console.log(results)
//     // const ul = document.createElement('ul');
//     // results.forEach((result) => console.log(result.types))
//     results.forEach((result) => {
//         let resultType = result.types;
//         const ul = document.createElement('ul');
//         // resultType.forEach((type) => console.log(type))
//         resultType.forEach((type) => {
//             // const ul = document.createElement('ul');
//             const li = document.createElement('li');
//             li.innerHTML = type.type.name;
//             ul.append(li);
//             console.log(ul)
//             // console.log(li)
//         })
//     })
// }

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
    // const filterBtn = document.querySelectorAll('.filterBtn');
// filterBtn.forEach((btn) => {
//     if (btn.textContent === "grass") {
//         // filterBtn.style.backgroundColor = 'green';
//         console.log(btn)
//     }
//     })
}

// const filterBtn = document.querySelectorAll('.filterBtn');
// filterBtn.forEach((btn) => {
// if (btn.textContent === "grass") {
//     // filterBtn.style.backgroundColor = 'green';
//     console.log(btn)
// }
// })

fetchPokemon();

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
    const pokemonInnerHTML = pokemon.map((pokemon) => 
    `<div class="pokeContainer" id="${pokemon.id}">
    <img srcset=${`https://nexus.traction.one/images/pokemon/pokemon/${pokemon.id}.png`}>
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
        const ul = document.querySelector('.types');

        // const colors = 'rgb(153, 0, 153)';
        // console.log(colors)
        // // console.log(ul)
        // const li = document.querySelectorAll('.type');
        // switch(colors) {
        //     case "grass": li.style.backgroundColor = 'rgb(153, 0, 153)';
        // }
        const typeLi = document.querySelectorAll('.type');
        typeLi.forEach((typeLi) => {
        if (typeLi.innerHTML === "grass") {
            typeLi.style.backgroundColor = 'rgb(0, 204, 0)'
        } else if (typeLi.innerHTML === "poison") {
            typeLi.style.backgroundColor = "rgb(153, 0, 153)"
        } else if (typeLi.innerHTML === "fire") {
            typeLi.style.backgroundColor = "rgb(255, 0, 0)"
        } else if (typeLi.innerHTML === "bug") {
            typeLi.style.backgroundColor = "rgb(153, 153, 0)"
        } else if (typeLi.innerHTML === "water") {
            typeLi.style.backgroundColor = "rgb(0, 128, 255)"
        } else if (typeLi.innerHTML === "normal") {
            typeLi.style.backgroundColor = "rgb(244, 244, 244)"
        } else if (typeLi.innerHTML === "fighting") {
            typeLi.style.backgroundColor = "rgb(102, 0, 51)"
        } else if (typeLi.innerHTML === "flying") {
            typeLi.style.backgroundColor = "rgb(102, 178, 255)"
        } else if (typeLi.innerHTML === "electric") {
            typeLi.style.backgroundColor = "rgb(255, 153, 153)"
        } else if (typeLi.innerHTML === "rock") {
            typeLi.style.backgroundColor = "rgb(153, 153, 0)"
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
            typeLi.style.backgroundColor = "rgb(204, 255, 255)"
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
})
    // switch(li) {
    //     case "grass": li.style.backgroundColor = 'green'
    //     break;
    //     case "water": li.style.backgroundColor = 'blue'
    // }

//         if (pokemon.type === null) {
//             console.log(pokemon.type[1]);
//         }
//    function createPokeTypes(results, ul) {
//         console.log(results)
//     }
       
       ///////GATHERING DATA FROM RESULTS AND FOREACH TYPE PRINT OUT ALL TYPES
       //////returns data all in first div
    //    results.forEach((res) => {
    //     // res.types.forEach((type) => console.log(type.type.name))
    //     res.types.forEach((type) => {
    //     const ul = document.querySelector('.types');
    //     let typeLi = document.querySelector('.type');
    //     typeLi.innerHTML = type['type']['name'];
    //     ul.append(typeLi)
    //     console.log(ul);
    //     })
    //    })
       //////////////////////////////////////////////////////////////////


        // function createPokeTypes(results, ul) {
        //     // console.log(results)
        //     // const ul = document.createElement('ul');
        //     // results.forEach((result) => console.log(result.types))
        //     results.forEach((result) => {
        //         let resultType = result.types;
        //         const ul = document.createElement('ul');
        //         // resultType.forEach((type) => console.log(type))
        //         resultType.forEach((type) => {
        //             // const ul = document.createElement('ul');
        //             const li = document.createElement('li');
        //             li.innerHTML = type.type.name;
        //             ul.append(li);
        //             console.log(ul)
        //             // console.log(li)
        //         })
        //     })
        // }

    // console.log(pokemon)
        ////////RETURNS TYPES IN A SINGLE LINE
        // const types = pokemon.map((results, ul) => {
        //     // type: results.types.map((type) => console.log(type))
        //     // console.log(results.type[1])
        //     let type1 = results.type[0];
        //     let type2 = results.type[1];
        //     console.log(type1);
        //     console.log(type2);
        //     // results.type.forEach((type) => console.log(type))
        //     // let ul = document.querySelector('.types');
        //     results.type.forEach((type) => {
        //         let ul = document.querySelector('.types');
        //         const typeLi = document.querySelector('.type')
        //         typeLi.innerHTML = type;
        //         console.log(typeLi)
        //     })
        //     // results.types.forEach((type) => {
        //     //     const ul = document.querySelector('.types');
        //     //     const typeLi = document.querySelector('.type')
        //     //     typeLi.innerHTML = type.type.name;
        //     //     console.log(ul)
        //     //     console.log(typeLi)
        //     // })
        //     //RETURNS TYPES OWN SEPARATE LINES
        // })

        /////////RETURNS TYPES ON OWN LINE/LI SEPARATES TYPES
        // const types1 = results.map((results) => {
        //     // type: results.types.map((type) => console.log(type))
        //     // console.log(results)
        //     // results.types.forEach((type) => console.log(type))
        //     results.types.forEach((type) => {
        //         const ul = document.querySelector('.types');
        //         const typeLi = document.querySelector('.type')
        //         typeLi.innerHTML = type.type.name;
        //         console.log(ul)
        //         console.log(typeLi)
        //     })
        // })
        
        
          
        
        // console.log(results)

        // pokemonInnerHTML = types;
        
        // createPokeTypes(results, ul)
        
    }
    // const ul = document.querySelector('.types');
    // function createPokeTypes(res, ul) {
    //     console.log(res)
    //         // results.forEach((res) => console.log(res.types))
    //         results.forEach((res) => {
    //             // let typeLi = docuemnt.createElement('li')
    //             // res.types.forEach((type) => console.log(type.type.name))
    //             // const ul = document.querySelector('.types');
    //             // console.log(ul);
    //             res.types.forEach((type) => {
    //                 // const typeLi = document.querySelector('.type');
    //                 const typeLi = document.createElement('li');
    //                 console.log(typeLi)
    //             })
    //         })
    // }
    // function createPokeTypes(results) {
    //     // console.log(results);
    //     // const types1 = results.map((result) => console.log(result.types))
    //     const types1 = results.map((result) => {
    //         const pokeTypes = result.types.forEach((type) => {
    //             // console.log(type)
    //             // const ul = document.querySelector('.types');
    //             const allPokeContainer = document.querySelector('.allPokemonContainer')
    //             // const container = document.querySelector('.pokeContainer');
    //             const ul = document.createElement('ul');
    //             const li = document.createElement('li');
    //             li.innerHTML = type.type.name; 
    //             ul.innerHTML = li;
    //             allPokeContainer.append(ul);
    //             // console.log(allpokeContainer)
    //             console.log(li)
    //         })
    // })
    // }

    ///////////////OUTSIDE CREATEPOKECARD FUNCTION WITH INNERHTML/ UL RETURNS NULL
    // function createPokeTypes(results) {
    //     console.log(results)
    //     // results.forEach((res) => console.log(res.types))
    //     results.forEach((res) => {
    //         res.types.forEach((type) => console.log(type.type.name))
    //         const ul = document.querySelector('.types');
    //         console.log(ul);
    //         // res.types.forEach((type) => {
    //         //     const typeLi = document.querySelector('.type');
    //         //     // console.log(typeLi)
    //         // })
    //     })
    // //////
    //     // const ul = document.createElement('ul');
    //     // results.forEach((result) => console.log(result.types))
    //     // results.forEach((result) => {
    //     //     let resultType = result.types;
    //     //     // const ul = document.querySelector('.types');
    //     //     // resultType.forEach((type) => console.log(type))
    //     //     resultType.forEach((type) => {
    //     //         // const ul = document.createElement('ul');
    //     //         const li = document.createElement('li');
    //     //         li.innerHTML = type.type.name;
    //     //         // ul.append(li);
    //     //         // console.log(ul)
    //     //         // console.log(li)
    //     //     })
    //     // })
    //     // createPokeCard(results)
    // }
    ////////////////////////////////////////////////////////////////////

//Search filter for displaying Pokemon
const searchFilter = () => {
    const searchBar = document.querySelector('.search-bar');
    const pokeContainer = document.querySelectorAll('.pokeContainer');
    searchBar.addEventListener('keyup', (event) => {
        let value = event.target.value.toLowerCase();
        // console.log(value)
        pokeContainer.forEach((container) => {
            if (container.querySelector('h3').textContent.toLowerCase().includes(value)) {
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