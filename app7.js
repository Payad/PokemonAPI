 // for (let i = 1; i <= 150; i++) {
        //     if (pokemon[i] <= 150) {
        //         console.log('Hello');
        //     }
        // }
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
 // const filterBtn = document.querySelectorAll('.filterBtn');
// filterBtn.forEach((btn) => {
//     if (btn.textContent === "grass") {
//         // filterBtn.style.backgroundColor = 'green';
//         console.log(btn)
//     }
//     })
//     for (let i = 1; i <= 20; i++) {
    //         const h4 = document.createElement('h4')
    //         // console.log(pokemon.id)
    //     if (i <= 10) {
    //         // console.log(h4);
    //         const allPokemonContainer = document.querySelector('.allPokemonContainer')
    //         console.log(allPokemonContainer)
    //         console.log(i)
    //         const h4 = document.querySelector('.Gen');
    //         // h4.innerHTML = "GEN I"
    //         h4.textContent = "Gen I"
    //         console.log(h4)
    //     } 
    //      if (i > 10 && i <= 20) {
    //         console.log(i)
    //         const h4 = document.querySelector('.Gen2');
    //         // h4.innerHTML = "GEN II"
    //         h4.textContent = "Gen II"
    //         console.log(h4)
    //     }
    // }
        // const colors = 'rgb(153, 0, 153)';
        // console.log(colors)
        // // console.log(ul)
        // const li = document.querySelectorAll('.type');
        // switch(colors) {
        //     case "grass": li.style.backgroundColor = 'rgb(153, 0, 153)';
        // }

        // if (abilityLi.innerHTML === "undefined") {
//     abilityLi.style.display = "none"
// }
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
    // genPokemon(pokemon)
    // function genPokemon(pokemon) {
    //     // // console.log(pokemon)
    //     // for (let i = 1; i <= 20; i++) {
    //     // // console.log(pokemon[i])
    //     // if(pokemon[i] <= 10) {
    //     //     const h4 = document.querySelector('.Gen')
    //     //     // console.log(h4)
    //     //     console.log(pokemon[i])
    //     //     h4.innerHTML = "Gen I"
    //     //     console.log(h4)
    //     // }
    //     // }
    //      }