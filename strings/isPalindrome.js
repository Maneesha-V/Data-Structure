// function reversePalindrome(str){
//  let strN = str.toLowerCase()
//  let left = 0
//  let right = strN.length-1
//  while(left<right){
//     if(strN[left]!==strN[right]){
//         return false
//     }
//     left++
//     right--
//  }
//  return true
// }
// console.log(reversePalindrome("Malayalam"))
// console.log(reversePalindrome("yalam"))
function palindrome(str){
    let left = 0
    let right = str.length-1
    while(left<right){
        while(left<right && !isChar(str[left])){
            left++
        }
        while(left<right && !isChar(str[right])){
            right--
        }
        if(toLowerCas(str[left])!==toLowerCas(str[right])){
            return false
        }
        left++
        right--
    }
    return true
}
function isChar(char){
    return ((char >= 'A' && char <= 'Z')||(char >= 'a' && char <= 'z'))
}
function toLowerCas(char){
    if(char >= 'A'&& char <= 'Z'){
        return String.fromCharCode(char.charCodeAt(0)+32)
    }
    return char
}
console.log(palindrome("Malayalam"))
console.log(palindrome("layalam"))