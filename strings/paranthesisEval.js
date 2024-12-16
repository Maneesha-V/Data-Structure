function isValidParanthesis(expr){
    let stack=[]
    for(let char of expr){
        if(char==='('){
            stack.push(char)
        }else if(char===')'){
            if(stack.length>0){
                stack.pop()
            }else{
                return false
            }
        }
    }
    return stack.length===0
}
console.log(isValidParanthesis("(a+b)*(c-d)"))