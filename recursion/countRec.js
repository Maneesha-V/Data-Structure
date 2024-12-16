function recurse(count){
    if(count>10){
        return
    }
    console.log(count)
    recurse(count+1)
}
recurse(1)