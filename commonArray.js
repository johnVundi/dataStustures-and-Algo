const array1 = ['a','d', 'e', 'k', 'o', 'p']
const array2 = ['b', 'n', 'm', 'j', 'f',]

function commonArray(aray){
    for( let i = 0; i < array1.length; i++){
        for(let j = 0; j < array2.length; j++){
            if(array1[aray[i]] === array2[aray[j]]){
                return true;
            }
        }

    }

    return false;
}

console.log(commonArray(array1,array2))