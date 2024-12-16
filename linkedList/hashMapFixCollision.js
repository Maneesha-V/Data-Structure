class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }            
        }
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            let keyItem = bucket.find(item=>item[0]===key)
            if(keyItem){
                keyItem[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        let keyItem = bucket.find(item=>item[0]===key)
        return keyItem[1]
    }
    remove(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        let keyItem = bucket.find(item => item[0]===key)
        if(keyItem){
            bucket.splice(bucket.indexOf(keyItem),1)
        }
    }
}
const table = new HashTable(10)
table.set("name","Alfred")
table.set("age",23)
table.display()
console.log(table.get("name"));
table.remove("age")
table.set("age",25)
table.set("gae",30)
table.display()

