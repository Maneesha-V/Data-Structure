function isValid(s){
    let stack=[]
    let map = {
        ')':'(',
        ']':'[',
        '}':'{'
    }
    for(let char of s){
        if(char in map){
            let top = stack.length ? stack.pop() : '#'
            if(top!==map[char]) return false
        }else{
            stack.push(char)
        }
    }
    return true
}
console.log(isValid(")("));


