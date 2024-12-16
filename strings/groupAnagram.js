function groupAnagrams(strs){
    let map={}
    for(let str of strs){
        let sortKey = str.split('').sort().join('')
        if(map[sortKey]){
            map[sortKey].push(str)
        }else{
            map[sortKey]=[str]
        }
    }
    return Object.values(map)
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));