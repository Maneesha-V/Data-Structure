// const str = ["1234","5678","90"]
// function strReverse(str){
//     let nStr = []
//     for(let i=0;i<str.length;i++){
//         let char = str[i]
//         let s=''
//         for(let j=char.length-1;j>=0;j--){
//             s += char[j]
//         }
//         nStr[i]= s
//     }
//     for(let k = 0;k<Math.floor(nStr.length/2);k++){
//         let temp = nStr[nStr.length-1-k]
//         nStr[nStr.length-1-k] = nStr[k]
//         nStr[k] = temp
//     }
//    return nStr 
// }
// console.log(strReverse(str))

//2 loops
// function strReverse(str){
//     let nStr = new Array(str.length)
//     for(let i=0;i<str.length;i++){
//         let reversed = ''
//         for(let j=str[i].length-1;j>=0;j--){
//             reversed += str[i][j]
//         }
//         nStr[nStr.length-1-i]=reversed
//     }
//   return nStr  
// }

let str = "haii hello"
function strRev(str){
    let temp=''
    let res=''
    for(let i=0;i<str.length;i++){
        let ch=str[i]
        if(ch!==' '){
            temp = ch+temp
        }else{
            res += temp + ' '
            temp=''
        }        
    }
    res += temp
    return res
}
console.log(strRev(str));
