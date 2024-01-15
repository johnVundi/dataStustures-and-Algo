function reverseString(str){
 //check input
 if(!str || str < 2 || typeof str !== 'string'){
    return "we mzee wacha mchezo"
 }
 
 const backStr = [];
 const itemLength = str.length - 1;

 for(i = itemLength; i >=0; i--){
    backStr.push(str[i])
 }


return backStr.join('');

}
reverseString("hello")