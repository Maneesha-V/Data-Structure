let str="hai welcome haiiii"
function longWord(str){
        let temp=''
        let longW=''
        let maxCount=count=0
        let i=0
        while(i<str.length){
        if(str[i]===' '){
            if(count>maxCount) {
                maxCount=count
                longW=temp
            }
            count=0
            temp=''
        }else{
            temp+=str[i]
            count++
        }
        i++
        }
    return {count,longW}
}
console.log(longWord(str))