let str ="iam welcoming you"
let i=0
console.log(strRecursive(str,i));
function strRecursive(str,i,temp=' ',res=' '){
    if(i>=str.length){
        res=res+temp
        return res
    }
    if(str[i]!==' '){
        temp=str[i]+temp
    }else{
        res=res+temp
        temp=' '
    }
    return strRecursive(str,i+1,temp,res)
}