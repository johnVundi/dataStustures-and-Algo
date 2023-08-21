// const array1 = ['a','d', 'e', 'k', 'o', 'p']
// const array2 = ['b', 'n', 'm', 'j', 'u']

// function commonArray(array1, array2){
//     for( let i = 0; i < array1.length; i++){
//         for(let j = 0; j < array2.length; j++){
//             if(array1[i] === array2[j]){
//                 return true;
//             }
//         }

//     }

//     return false;
// }

// console.log(commonArray(array1,array2))

const array1 = ['a','d', 'e', 'k', 'o', 'p']
const array2 = ['b', 'n', 'm', 'j', 'e']

function commonArray(array1, array2){
    let map = {}

    for(let i = 0; i < array1.length; i++){
        if(!map[array1[i]]){
            const item = array1[i]
            map [item]= true;
        }
    }
    for(let j = 0; j < array2.length; j++){
        if(map[array2[j]]){
            return true
        }
    }
return false
}

console.log(commonArray(array1,array2))