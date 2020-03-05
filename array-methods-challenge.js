/* 

    Given the following array of Stardew Valley characters, create a new array of everyone who lives in Pelican Town
    Ex: ( livesInTown: true ).

    BONUS :: Once you have completed that, try to modify your solution to find everyone who lives in Pelican town
    AND likes Amethyst OR wine. And this time. your array should onto contain the person's NAME.

*/

const stardewPeople = [
    { name: 'Penny', livesInTown: true, likes: [ 'Diamond', 'Melon' ]},
    { name: 'Abigail', livesInTown: true, likes: [ 'Pumpkin', 'Amethyst'] },
    { name: 'Emily', livesInTown: true, likes: [ 'Amethyst', 'Cloth' ]},
    { name: 'Haley', livesInTown: true, likes: [ 'Fruit Salad', 'Pink Cake' ]},
    { name: 'Leah', livesInTown: false,  likes: [ 'Wine', 'Goat Cheese' ] },
    { name: 'Maru', livesInTown: false, likes: [ 'Battery Pack', 'Iridium Bar' ] },
    { name: 'Alex', livesInTown: true,  likes: [ 'Salmon Dinner', 'Complete Breakfast' ] },
    { name: 'Elliot', livesInTown: false, likes: [ 'Crab Cakes', 'Pomegranate' ] },
    { name: 'Harvey', livesInTown: true, likes: [ 'Coffee', 'Wine' ] },
    { name: 'Sam', livesInTown: true, likes: [ 'Cactus Fruit', 'Pizza' ] },
    { name: 'Sebastian', livesInTown: false, likes: [ 'Obsidian', 'Frozen Tear' ] },
    { name: 'Shane', livesInTown: false, likes: [ 'Beer', 'Hot Pepper' ] },
];

// * This is what I assume most people will come up with
//  * it's not necessarily bad - but can be improved

const solutionOne = (arr) => {
    let newArr = [];

    for (i = 1; i < arr.length; i ++) {
        if (arr[i].livesInTown === true) {
            newArr.push(arr[i]);
        } 
    }

    return newArr;
}

// * The ultimate solution for part one - but normally people don't get the one liners right away
// * Great time to introduce the idea of array methods to solving -nearly- anything

const solutionTwo = (arr) => {
    return arr.filter(person => person.livesInTown === true);
}

// * Bonus solution is going to implement as many array methods as possible
// * .filter(), .map(), and .forEach()

const bonusSolution = (arr) => {
    let ret = [];
    arr.filter(person => person.livesInTown === true).map(person => {
        if (person.likes.includes('Amethyst')) {
            return person.name;
        }

        if (person.likes.includes('Wine')) {
            return person.name;
        }
    })
    .forEach(item => {
        if (item !== undefined) {
            ret.push(item);
        }
    });
    return ret; // ? There's another cool trick we can introduce here .filter(Boolean) - removed ALL falsy values
    // ? remove the .forEach() and down and replace with the .filter(Boolean)
    // ? and change the function to return the array directly instead of using the ret[];
}

console.log(bonusSolution(stardewPeople));

/*
 ? why would I have a return in my .map()?
    * because .map() - needs - it. a .map() returns a new array, so the callback we pass in - has - to know - what - to return back into that array

 ? why don't I have a return in my forEach? or my .filter() ?
    * 1 ) -technically- we do have a return for the .filter() however it's implicit since it's a one liner
    *      the return for a .filter() is interesting, technically we only need to return true or false to let .filter()
    *      know if the current element passed the test
    * 2 ) forEach doesn't return a new array like .map() does - it's all about finding the right function for the job
    
 ? Which is better to use, .forEach, or .map() ? 
    * definitely .map() in this scenario  
*/