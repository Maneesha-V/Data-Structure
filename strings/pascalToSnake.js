function pascalToSnake(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if(char >= 'A' && char <= 'Z'){
            if(i!==0){
                result += '_'
            }          
            result += toLower(char)
        }else{
            result += char
        }
    }
    return result
}
function toLower(ch) {
    return String.fromCharCode(ch.charCodeAt(0) + 32)
}
console.log(pascalToSnake("MyNameManeesha"));
