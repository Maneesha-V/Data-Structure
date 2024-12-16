let s = "Hello how are you Contestant"
let k = 4
function truncateSentence(s,k){
    let word=''
    let wCount =0
    let result = ''
    for(let i=0;i<s.length;i++){
        let ch = s[i]
        if(ch === ' '|| ch === s.length-1){
            if(wCount<k){
                result += word
                wCount++
                if(wCount<k){
                    result += ' '
                }
            }
            word = ''
        }else{
            word += ch
        }
    }
    return result
}
console.log(truncateSentence(s,k));
