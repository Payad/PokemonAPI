//Function to fetch 151 pokemon
function fetchPokemon() {
    let pokemonArr = [];
    // const url = `https://pokeapi.co/api/v2/pokemon?${i}`
    // const url = 'Charizard, Mewtwo';
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`
        pokemonArr.push(fetch(url).then(data => data.json()))
        // pokemonArr.push(url);
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
        })).sort((a, b) => a.type > b.type ? 1 : -1)
        createPokeCard(pokemon)
    })
}

    //Create pokemon div and display pokemon 
    const createPokeCard = (pokemon) => {
       const allPokemonContainer = document.querySelector('.allPokemonContainer');
       const pokemonInnerHTML = pokemon.map((pokemon) => 
       `<div class="pokeContainer">
       <image src="${pokemon.image}">
       <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
       <p>${pokemon.type}</p>
       </div>`
       
       )
       allPokemonContainer.innerHTML = pokemonInnerHTML;
        // typeFilter(pokemon)
        searchFilter()
        typeFilter(pokemon)
        idAsc(pokemon)
        idDesc(pokemon)
}

//Search filter for displaying Pokemon
const searchFilter = () => {
    const searchBar = document.querySelector('.search-bar');
    const pokeContainer = document.querySelectorAll('.pokeContainer');
    searchBar.addEventListener('keyup', (event) => {
        let value = event.target.value.toLowerCase();
        console.log(value)
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

// a filter for iterating through pokemon types
function typeFilter(pokemon) {
    const pokeContainer = document.querySelectorAll('.pokeContainer');
    const filterBtn = document.querySelectorAll('.filter-btn');
    filterBtn.forEach(function(btn) {
        btn.addEventListener('click', (e) => {
            // console.log(btn);
            // console.log(btn.innerText);
            let type = e.currentTarget.innerText;
            console.log(type);
            // console.log(pokemon)
        //     pokeContainer.forEach((container) => {
            // if (type === btn.innerText) {
            //     console.log(type)
            //     container.style.display = 'block'
            //  } else {
            //     container.style.display = 'none'
            //  }
        // })
            // console.log(pokemon);
            let pokemonFilter = pokemon.filter((item) => {
                // console.log(pokemon);
                // console.log(item)
                if (item === item.type) {
                    // console.log(item);
                    return item;
                }
                console.log(item);
            })
            createPokeCard(pokemonFilter)
        
            // pokemon.filter((item) => {
            //     if (item === type) {
            //         return item;
            //     }
            // })
            // console.log(pokemon)
            // console.log(pokemonFilter);
        })
    });
    // console.log(pokemon);
}
// typeFilter();



fetchPokemon();

//function for sorting pokemon in Ascending order
function idAsc(pokemon) {
    const btnAsc = document.querySelector('.sortAscending');
    btnAsc.addEventListener('click', () => Ascending(pokemon))
    function Ascending(pokemon) {
        pokemon.sort((a, b) => a.id - b.id);
        createPokeCard(pokemon)
    }
    
}

//funcuton for sorting pokemon in Descending order
function idDesc(pokemon) {
const btnDsc = document.querySelector('.sortDescending');
btnDsc.addEventListener('click', () => Descending(pokemon))
function Descending(pokemon) {
    pokemon.sort((a, b) => b.id - a.id);
    createPokeCard(pokemon);
}
}


// const idAsc = document.querySelector('.sortAscending');
// console.log(idAsc)

// idAsc.addEventListener('click', () => Ascending());

// idAsc.addEventListener('click', () => {
//     // console.log(idAsc)
// })


// function Ascending(pokemon) {
//     pokemon.sort((a, b) => a.id - b.id);
//     createPokeCard(pokemon)
//     console.log(pokemon)
// }

// Promise.all(pokemonArr).then(data => console.log(data))

const list1 = ['carrots', 'apples', 'bananas', 'kiwi', 'mango', 'milk', 'chocolate'];
// function filteredItems() {
//     const list1 = ['carrots', 'apples', 'bananas', 'kiwi', 'mango', 'milk', 'chocolate'];
//     const newList = list1.filter((list) =>
//         list.startsWith('c'));
//     console.log(newList);
// }
// filteredItems();

// function filterItems(arr, query) {
//     return arr.filter((el) => 
//         el.toLowerCase().includes(query.toLowerCase())
//     )
// }
// console.log(filterItems(list1, 'ap'))

const cars = ['bmw', 'volvo', 'honda', 'toyota', 'jeep', 'chevy'];

function filteredCars(arr, query) {
    // const newCars = cars.filter((car) => car.length < 4)
    return cars.filter((car) =>
    car.toLowerCase().includes(query.toLowerCase())
    )
    // console.log(newCars)
}
// filteredCars();
console.log(filteredCars(cars, "vo"))

// let arr = [10, 5, 15, 30, 105, 59, 4, 13, 27, 55, 69, 2, 17];

// function isBigEnough(n) {
//     return n >= 20;
// }

// let filtered = [10, 5, 15, 30, 105, 59, 4, 13, 27, 55, 69, 2, 17].filter((isBigEnough))
// console.log(filtered);

// function isCar(n) {
//     return n.length >= 5;
// }

// const newCar = ['mazda', 'bmw', 'porche', 'toyota'].filter((isCar
// ))
// console.log(newCar)

// const games = ['need for speed', 'armeggedon', 'sifon filter', 'dino crisis', 'turok'];

// function getGames(arr, query) {
//     return arr.filter((g) => 
//     g.toLowerCase().includes(query.toLowerCase()))

// }
// console.log(getGames(games, 'sifon filter'));

// function numbers(h) {
//     return h >= 200 
// }


// const highNumbers = [4, 6, 200, 140, 55, 34, 60, 12, 92, 169, 400, 723, 1000, 90, 104].filter((numbers))
// console.log(highNumbers);

// const superCars = ['masarati', 'lamborgini', 'ferrari', 'aston martin', 'bugati'];

// function fastCars(arr, query) {
//     return arr.filter((c) => 
//         c.toLowerCase().includes(query.toLowerCase())
//     )
// }

// console.log(fastCars(superCars, 'Masarati'))


const slowCars = ['honda', 'toyota', 'masda', 'fiat', 'nissan'];

function getSlowCars(arr, word) {
    return arr.filter((el) => 
        el.toLowerCase().includes(word.toLowerCase())
    )
    
}

// console.log(getSlowCars(slowCars, 'asda'))
function lowNumber(n) {
    return n <= 30;
}

const lowNumbers = [1, 5, 10, 17, 12, 3, 9, 4, 7, 20, 40, 6, 34, 83, 8];

 const newNumbers = lowNumbers.filter(lowNumber);
console.log(newNumbers);


function lowNumbs(s) {
    return s <= 100
}

 const otherNumbers = [23, 8, 4, 90, 35, 26, 120, 400, 2560, 237].filter((lowNumbs))
console.log(otherNumbers)


// const list = ['cars', 'boats', 'airplanes', 'amphibious'];
// const newList1 = list.filter((list) => list.startsWith('b'));
// console.log(newList1);

//MAPPING
 const numMap = [23, 67, 90, 87, 54, 12, 38, 29, 100, 203, 507, 482, 945];

 //inline callback function
 const newMap = numMap.map(function(x){
    return x*2;
})
//returns [46, 134, 180, 174, 108, 24, 76, 58, 200, 406, 1014, 964, 1890]

//arrow function
const newMap1 = numMap.map((d) => {
    return d*3;
})
//returns [69, 201, 270, 261, 162, 36, 114, 87, 300, 609, 1521, 1446, 2835]

//or 
// const newMap = numMap.map(x => x*2);
 console.log(newMap1);

//  const posNums = [1, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const posNums = [1, 4, 9];
 
 let newNums = posNums.map((d) => Math.sqrt(d))
 console.log(posNums);
 console.log(newNums);

  const filteredNums = newNums.filter((n => n <= 2))
  console.log(filteredNums)