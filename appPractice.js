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