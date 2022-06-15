/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    let doubleArr = [];
    arr.map(function(num){
        doubleArr.push(num*2);
    })
    return doubleArr;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    let evenArr =[];
    arr.filter(function(val){
        if (val % 2 === 0){
            evenArr.push(val);
        }
    })
    return evenArr;
}



/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    let firstLast = [];
    arr.filter(function(val){
        firstLast.push(val[0] + val[val.length-1]);
    })
    return firstLast;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/


function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
      val[key] = value; // the val is the object and the "key" in the [] is the key we are assigning with the value "value". in this eg the key is "title" and the value is "instructor"
    });
    return arr;
  }

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){

    let strArr = str.split(""); // splits string into arr of each inidividual char
    let returnObj = {}; // start with an emoty object
    const vowels ="aeiou";

    strArr.filter(function(lett){
        let lowerCaseLett = lett.toLowerCase();
        if (vowels.indexOf(lowerCaseLett) !== -1){ // if the vowels are present in the array of the strings (aka it does not give us -1)
            if (returnObj[lowerCaseLett]){ // if the return object has the value of the vowel letter as a key then we add 1 to the value of that key
                returnObj[lowerCaseLett]++;
            }

            else {
                returnObj[lowerCaseLett] = 1; // if the return object does not have that value of the vowel then we set it to 1 for the first time.
            }
        }
    })
    return returnObj;
}


/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    let doubleArrMap = [];
    arr.map(function(val){
        doubleArrMap.push(val * 2);
    })

    return doubleArrMap;
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){

    let timesArr = [];

    arr.map(function(val,index){
        timesArr.push(val*index);
    })
    return timesArr;
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    return arr.map(function(val){
        return val[key]; // returning the value of the key we inputted
    })
}



/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){

    return arr.map(function(val){
        return val["first"] + " " + val["last"]; // we are accessing the value for the key "first" and key "last" and adding those values together in a string
    })
    
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {

    return arr.filter(function(val){
return val[key]; //returning the value of the key we inputted
    })
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
 
    return arr.filter(function(val){
    return val === searchValue; // return if the value in the array is the same as the searchvalue we inputted
    }) [0]; // and only return the first of its occurence 
    }

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    return arr.filter(function(val){
        return val[key] === searchValue; // returning the value of the key we inputted  if the key is the same as the searchvale we inputted
    })[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    let lowerArr = str.toLowerCase(); // making the inutting str lower case 
    let lowerStrArr = lowerArr.split("");//splitting that lower case string into an array of each individual letter
    const vowels = "aeiou";

    return lowerStrArr.filter(function(letter){
        let lowerLetter = letter.toLowerCase();
        if (vowels.indexOf(lowerLetter) === -1){ // if the letter is not found in the vowels string then we reutrn that letter 
            return lowerLetter;
        } 
    }).join(""); //joining the arr elements into a string
    
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {

    let OddArr = [];
    let doubleOddArr =[];
    
    arr.filter(function(val){
        if(val % 2 !==0 || val === 1){
            OddArr.push(val);
    }

});

OddArr.map(function(val){
    doubleOddArr.push(val*2)
});
return doubleOddArr;

}
 
//  arr.map(function(val){
//         val *2 
//     })