function snakeToPascal(str){
    let capital = true
    let result =''
   for(let i=0;i<str.length;i++){
       let char = str[i]
       if(char==='_'){
           capital = true
       }else{
           if(capital){
               result += upperCase(char)
               capital = false
           }else{
               result += char
           }
       }
   } 
   return result
}
function upperCase(ch){
    if(ch >= 'a' && ch <= 'z'){
        return String.fromCharCode(ch.charCodeAt(0)-32)
    }
}
console.log("my_name_is_maneesha")