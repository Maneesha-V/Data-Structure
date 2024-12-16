class TrieNode{
    constructor(){
        this.children = {}
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(input){
        for(let i=0;i<input.length;i++){
            const suffix = input.slice(i)
            this.insertSuffix(suffix)
        }
    }
    insertSuffix(suffix){
        let curr = this.root
        for(let char of suffix){
            if(!curr.children[char]){
                curr.children[char] = new TrieNode()
            }
            curr = curr.children[char]
        }
    }
    search(pattern){
        let curr = this.root
        for(let char of pattern){
            if(!curr.children[char]){
                return false
            }
            curr = curr.children[char]
        }
        return true
    }
}
const suffixTrie = new Trie()
suffixTrie.insert("banana")
console.log(suffixTrie.search("ana"));
console.log(suffixTrie.search("lana"));


