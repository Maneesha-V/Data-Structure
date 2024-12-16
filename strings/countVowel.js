let str = "iam a winner"
let vowels ="aeiou"
function countVowel(str,vowels){
   let charCount={}
   let total=0
   for(let i=0;i<vowels.length;i++){
    charCount[vowels[i]]=0
   }

   for(let i=0;i<str.length;i++){
    let ch = str[i]
    for(let j=0;j<vowels.length;j++){
        if(ch===vowels[j]){
            charCount[vowels[j]]+=1
            total+=1
        }
    }
   }
   return total
}
console.log(countVowel(str,vowels));
