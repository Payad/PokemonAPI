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

    const promises = [];

    const url = pokemon.url;
    // fetch(url)

    promises.push(fetch(url).then((data) => data.json()))
    
    // console.log(data);
    // .then((data) => data.json().sort((a, b) => a.type > b.type ? 1 : -1))
    
    // .then((data) => data.json())

    // console.log(url);
    // console.log(pokemon);

    Promise.all(promises).then((results) => {
        // console.log(data);
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(','),
            id: result.id,
        })).sort((a, b) => a.type > b.type ? -1 : 1)
        createPokeCard(pokemon);
    })

//ORIGINAL CODE TO PARSE POKEMON DATA
    // .then(function(pokemon) {
    //     // console.log(pokemon);
        
    //     createPokeCard(pokemon)
    //     // console.log(pokemon.sort((a, b) => a - b));
    // })
}

function createPokeCard(pokemon) {

    const pokeContainer = document.querySelector('.pokeContainer');

    //READY TO CREATE HTML MARKUP FOR DISPLAYING DIV

    // console.log(pokemon);
    // pokemon.forEach((pokeman) => {
    //     promises.push({
    //         name: pokeman.name,
    //         id: pokeman.id,
    //     })
    // })
    // for(let i = 0; i < pokemon.length; i++) {
    //     promises.push({
    //         name: pokemon.name,
    //         image: pokemon.sprites['front_default'],
    //         id: pokemon.id,
    //     })
    // }

    // promises.push(pokemon).then((result) => result.json())

    console.log(pokemon)
}

getHTML();