// function fetchPokemon() {
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
//             // createPokeCard(pokemon)
//             console.log(pokemon);
//         })
    
// }

// function createPokeCard() {

// }

// function fetchPokemon() {
//     let promises = [];
//     for(let i = 1; i <= 150; i++) {
//         const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
//         promises.push(fetch(url).then((data) => data.json()));
//     }
// }


//Promise.all takes an iterable of promises and returns a single Promise
let promise = Promise.resolve(3);
let promise2 = 55;
let promise3 = ['carrots', 'lettuce', 'potatoes', 'peas'];
let promise4 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 100, 'foo')
})

// Promise.all([promise, promise2, promise3, promise4]).then((values) => console.log(values))
// Promise.all(promise2).then((data) => console.log(data))
//result: 3, 55, ['carrots', 'lettuce', 'potatoes', 'peas']


// const shoppingList = ['carrots', 'lettuce', 'potatoes', 'peas']

   
// fetchPokemon();

// function kantoPokemon() {
//     fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
//     .then((data) => data.json())
//     // .then((data) => console.log(data))
//     .then((mainPokemon) => {
//         mainPokemon.results.forEach(function(pokemon) {
//             console.log(pokemon);
//         })
//     })
// }

// kantoPokemon();

function kantoPokemon() {
    let pokeArr = [];
    for(let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`
        pokeArr.push(fetch(url).then((data) => data.json()));
        // pokeArr.push(fetch(url).then((data) => data.json()).then((data) => console.log(data)))
    // const promises = [];
    // for (let i = 1; i <= 150; i++) {
    //     const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    //     promises.push(fetch(url).then((res) => res.json()));    
}
    // createPokeCard(pokemon)
    Promise.all(pokeArr).then((results) => {
        // const image = `https://nexus.traction.one/images/pokemon/pokemon/${pokemon.id}.png`
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            // image: https://nexus.traction.one/images/pokemon/pokemon/${pokeId}.png
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        createPokeCard(pokemon)
    })
}

    function createPokeCard(pokemon) {
        // console.log(pokemon)
        // const image = `https://nexus.traction.one/images/pokemon/pokemon/${pokemon.id}.png`
        const allPokemonContainer = document.querySelector('.allPokemonContainer');
        const pokemonInnerHTML = pokemon.map((pokemon) => 
            // `<div>${pokemon.name}</div>
            //  <div>${pokemon.id}</div>`
            `<image src="${pokemon.image}">
            <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>`
        )
        // allPokemonContainer.append(pokemonInnerHTML);
        allPokemonContainer.innerHTML = pokemonInnerHTML;


    //     const pokemonHTMLString = pokemon
    //         .map(
    //             (pokeman) => `
    //     <li class="card">
    //         <img class="card-image" src="${pokeman.image}"/>
    //         <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
    //         <p class="card-subtitle">Type: ${pokeman.type}</p>
    //     </li>
    // `
    //         )
    //         .join('');
        typeFilter(pokemon);
    }

    function typeFilter(pokemon) {
        //returns HTML collection getElementsByTagName('button');
        const btn = document.querySelector('button');
         const allPokemonContainer = document.querySelector('.allPokemonContainer');
        
         // console.log(btn) returns all buttons in nodeList using querySelectorAll
        // console.log(btn)
        // console.log(pokemon[1].id) returns pokemon id of 1/ ivysaur
        // console.log(pokemon[0].id) returns pokemon id of 0/ bulbasaur
        // console.log(pokemon[0].id);
        // console.log(`${pokemon[0].name}`);
        // console.log(pokemon);

        //console.log(btn.textContent) console log the text content of button
        // console.log(btn.textContent);
        // console.log(btn)

        btn.addEventListener('click', () => {
        //    console.log(btn.textContent)
        //     // console.log(btn);
        // })

        // if (btn.textContent === 'Grass') {
        //     console.log('grass');
        //     // allPokemonContainer.style.display = 'block'
        //     // StyleSheet.display = 'block'
        //     // console.log(pokemon);
        //     // allPokemonContainer.style.display = 'block'
        //     pokemon.filter((pokemon) => {
        //         // console.log(pokemon.id)

        //         // if (pokemon.type) {
        //         //     console.log(pokemon.type);
        //         // }
        //         // console.log(pokemon.type)
        //         // let type = pokemon.type;
        //         // console.log(type)

        //         // if (type === 'grass') {
        //         //     console.log(type);
        //         // }
        //         if ('BUTTON' === pokemon.type) {
        //             // console.log(type)

        //         }
        //         // console.log(type);
        //         // const pokemonType = 
        //     })
        // }

        // const filterBtn = document.querySelectorAll('.filterByType');
        const filterBtn = document.querySelectorAll('.filter-btn');
        const allPokemonContainer = document.querySelector('.allPokemonContainer');
        // console.log(filterBtn)
        filterBtn.forEach(function(btn) {
            // let type = pokemon.type
            // console.log(pokemon.type);
            // console.log(pokemon)
           btn.addEventListener('click', function(e) {
            // let type = e.currentTarget.pokemon.type
            let type = e.currentTarget.innerText;
            console.log(type)

            let pokemonFilter = pokemon.filter((item) => {
                // console.log(pokemon)
                if(type === item.type) {
                    // return item
                    console.log(type)
                }
                // allPokemonContainer.append(pokemonFilter)
                // console.log(pokemonFilter);
            })
                //selecting filterByType button element to match type clicked
                if (filterByType.querySelector('button').innerText === pokemon.type) {
                    //display pokemon divs of type
                    //ex. pokeContainer.style.display = 'block'
                }

                // if (allPokemonContainer.querySelector('.pokeContainer').innerText === `${pokemon.type}`) {

                // }
            // console.log(pokemonFilter);
            // allPokemonContainer.append(pokemonFilter)
            // if (type === pokemon.type) {}
        })
        
        })

    })
        // const filter = document.querySelector('.filterByType');

        // filter.addEventListener('click', () => {
        //     console.log(filter);
        // });

        // btn.addEventListener('click', () => {
        //     console.log(btn);
        // })
        

        // btn.addEventListener('click', (event) => {
        //     const target = event.target;
        //     if (target.textContent === 'grass') {
        //         allPokemonContainer.style.display = 'block'
        //     } else {
        //         allPokemonContainer.style.display = 'none'
        //     }
        //     // if (btn.type.textContent === 'grass') {
        //     //     console.log(button)
        //     // }
        // })
        // if (button.innerHTML === grass) {

        // }
        // const grass = document.querySelector('.grass')
    // // const filter = document.querySelector('.filterByType')
    // // filter.addEventListener('click', () => {
    // //     console.log(filter);
    // })
    // grass.addEventListener('click', () => {
    //     if (grass.textContent === 'grass') {
    //         console.log(grass);
    //     }
    // })
    // // button.addEventListener('click', () => {
    // //     console.log(button);
    // })

        // if (button.innerHTML === 'grass') {
        //     console.log(button)
        // }
        // if (filter.type === 'grass') {
        //     pokemon.style.display = 'block'
        // } else {
        //     pokemon.style.display = 'none'
        // }
    // })
}

kantoPokemon();


// const list = ['carrots', 'lettuce', 'potatoes', 'celery', 'green beans', 'milk', 'bread'];
// console.log(list);
// list.sort();
// console.log(list);
// const results = list.filter((list) => list.length > 6)
// console.log(results);

// const dinos = ['tyrannosaur', 'triceratops', 'edmontosaurus', 'velociraptor', 'mosaurus', 'brontosaurus'];
// console.log(dinos);
// // dinos.sort();
// // console.log(dinos)

// const slice = dinos.slice(2, 5);
// console.log(slice)

// const months = ['Jan', 'March', 'April', 'May'];
// months.splice(1, 0, 'Feb');
// console.log(months);

// const res1 = dinos.sort();
// console.log(res1);


// // const res = dinos.filter((dinos) => dinos.length > 11)
// // console.log(res)

// // const res = dinos.filter((dinos) => dinos.startsWith('e'))
// // console.log(res)

// const res2 = dinos.filter((dinos) => dinos.endsWith('s'))
// console.log(res2)

// const array = [3, 7, 20, 10, 15];

// const array1 = array.map((x) => x * 2)
// console.log(array1)

// //PROMISES

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('hello');
    
//     }, 300);
// })
// .then((data) => console.log(data))

// let p1 = 435;
// let p2 = [4, 6, 7, 9, 10];
// let p3 = Promise.resolve(57);

// // Promise.all([p1, p2, p3]).then(data => console.log(data))

// const eagles = [];

// eagles.push('Wilcot Eagle', 'BlueSkinner Hawk', 'Egyption Eagle', 'Azteca Hawk', 'Meridian Hawk', 'Valcore Eagle', 'Zebra Hawk', 'Bald Eagle', 'Black Hawk', 'Fishing Hawk');

// console.log(eagles);

// eagles.sort();
// console.log(eagles);

// // const newList = eagles.filter((eagles) => {
// //     eagles.endsWith('k');
// // });

// // const newList = eagles.filter((eagles) => eagles.startsWith('E'))
// // console.log(newList);

// // eagles.sort();
// // console.log(eagles);
// // eagles.reverse();
// // console.log(eagles)

// // const reducer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const initialValue = 0;
// //  const reduceMethod = reducer.reduce((accumilator, currentValue) => 
// //     accumilator + currentValue, initialValue
// // )

// // const sumArr = [33, 56, 84, 90, 30, 22, 72, 61, 53];
// // const initialValue = 0;
// // const newSum = sumArr.reduce((accumulator, currentValue) => 
// //     accumulator + currentValue, initialValue
// // )

// // console.log(newSum);

// const fruits = [];
// fruits.push('Banana', 'Apple', 'Mango', 'Kiwi', 'PassionFruit');
// console.log(fruits);

// fruits.splice(2, 0, 'Coconut', 'Citrus');
// console.log(fruits)

// fruits.sort();
// console.log(fruits);
// fruits.reverse();
// console.log(fruits)

// const filterFruit = fruits.filter((fruits) => fruits.endsWith('i'));
// console.log(filterFruit)

// fruits.pop();
// console.log(fruits);

// .then((blah) => {blah})

// console.log(reduceMethod);