function strReverse(str){
    let stack=[]
    let revStr=''
    for(const char of str){
        stack.push(char)
    }
    while(stack.length>0){
        revStr+=stack.pop()
    }
    return revStr
}
console.log(strReverse("hello"));
