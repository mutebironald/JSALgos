//naive key value store
function NaiveDict(){
    this.keys = [];
    this.values = [];
}

NaiveDict.prototype.set = function(key, value){
    this.keys.push(key);
    this.values.push(value);
}

NaiveDict.prototype.get = function(lookupKey){
    for(var i =0; i<this.keys.length; i++){
        var key = this.keys[i];
        if(key === lookupKey){
            return this.values[i]
        }
    }
}

//NaiveDict is very slow and we may need to iterate through every item in the table., worst case performance is O(n).


function HashTable(){
    this.bucketCount = 100000;
    this.buckets = [];
    for (var i = 0; i< this.bucketCount; i++){
        this.buckets.push(new NaiveDict());
    }
}

HashTable.prototype.hashFunction = function(key){
    var hash = 0;
    for (var i =0; i<key.length; i++){
        hash += key.charCodeAt(i);
    }
    return hash;
}

HashTable.prototype.getBucketIndex = function(key){
    return this.hashFunction(key) % this.bucketCount;
}

HashTable.prototype.getBucket = function(key){
    return this.buckets[this.getBucketIndex(key)];
}

HashTable.prototype.set = function(key, value){
    this.getBucket(key).set(key, value);
}

HashTable.prototype.get = function(lookupKey){
    return this.getBucket(lookupKey).get(lookupKey)
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

var dict = new HashTable();

var keys = []
var values = []
for (var i = 0;i< 100000;i++){
    keys.push(makeid())
    values.push(Math.round())
}

console.time("SET")
for (var i = 0;i < keys.length;i++){
    dict.set(keys[i], values[i])
}
console.timeEnd("SET")

console.time("GET")
for (var i = 0;i < keys.length;i++){
    var val = dict.get(keys[i])
}
console.timeEnd("GET")
