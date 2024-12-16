class TrieNode{
    constructor(){
        this.children = {}
        this.isEndOfWord = false
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        let curr = this.root
        for(let char of word){
            if(!curr.children[char]){
                curr.children[char] = new TrieNode()
            }
            curr = curr.children[char]
        }
        curr.isEndOfWord = true
    }
    search(word){
        let curr = this.root
        for(let char of word){
            if(!curr.children[char]){
                return false
            }
            curr = curr.children[char]
        }
        return curr.isEndOfWord
    }
    startsWithPrefix(prefix){
        let curr = this.root
        for(let char of prefix){
            if(!curr.children[char]){
                return false
            }
            curr = curr.children[char]
        }
        return curr
    }
    collectWords(node,prefix,words){
        if(node.isEndOfWord){
            words.push(prefix)
        }
        for(let char in node.children){
            this.collectWords(node.children[char],prefix+char,words)
        }
    }
    display(){
        const words=[]
        this.collectWords(this.root,"",words)
        return words
    }
    searchPrefix(prefix){
        let curr = this.root
        for(let char of prefix){
            if(!curr.children[char]){
                return false
            }
            curr = curr.children[char]
        }
        return curr
    }
    autoComplete(prefix){
        const words=[]
        let prefixNode = this.searchPrefix(prefix)
        if(!prefixNode){
            return words
        }
        this.collectWords(prefixNode,prefix,words)
        return words
    }
}
const trie = new Trie()
trie.insert("hai")
trie.insert("ha")
trie.insert("apple")
console.log(trie.search("hai"));
console.log(trie.startsWithPrefix("a"));
console.log(trie.display());
console.log(trie.autoComplete("ha"));
