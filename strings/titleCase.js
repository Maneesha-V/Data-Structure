let str="hii faReeda welcome";
let res="";
for(let i=0;i<str.length;i++){
    let char=str[i];
    if(i===0 || str[i-1]===' '){
        res+=String.fromCharCode(char.charCodeAt(0)-32)
    }else{
        res+=lower(char)
    }
}
function lower(char){
    if(char>='A'&&char<='Z'){
        return String.fromCharCode(char.charCodeAt(0)+32)
    }else{
        return char
    }
}
console.log(res)