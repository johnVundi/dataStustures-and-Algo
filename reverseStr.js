 function reverseStr(str){
    // let revStr = str.split('').reverse().join('') ;
    // return revStr;

    if( !str || str.length < 2 || typeof str !== 'string'){
        return "stop joking my friend!"
    }
    let revStr = '';
    for( let i = 0; i<str.length; i++){
        revStr = str[i]+ revStr
    }

    return revStr
 } 

 console.log(reverseStr("he"))