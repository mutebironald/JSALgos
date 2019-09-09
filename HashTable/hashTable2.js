
var myDictionary = {
   dog: 'furry Animal',
   Amazon: 'A huge long river',
   fruitcake: 'A gift made for giving',
   cat: 'A furry animal that eats rats' 
}

//in linked lists, time to find item is proportionate to length of array.-active

//while in a hash map, time taken to find a given key is constant

var HashTable = function(){
    var storage = [];
    var max = 1000;
}

var getIndexBelowMaxForKey = function(str, max){
    var hash = 0;
    if(str.length == 0) return hash;
    for(var i = 0; i < str.length; i++){
        hash = hash << 5 - hash;
        hash = hash + str.charCodeAt(i);
        hash = hash & hash;
    }
    return Math.abs(hash % max); //negative numbers break stuff
}

//using the index provided by our hashing function, we insert and retrieve values at the specified locations in our storage array
// since storage index is generated algorithmically based on the key, the total number of items stored doesn't matter.

var insert = function(key,value){
    if(typeof(key) === "undefined"){
        throw("Cannot insert with undefined key!")
    }
    var hashIndex = getIndexBelowMaxForKey(key, max);
    storage[hashIndex] = value;
};

var retrieve = function(key){
    var hashIndex = getIndexBelowMaxForKey(key,max)
    return storage[hashIndex];
}

var value = getIndexBelowMaxForKey('dog', 10000)

console.log(value, 'value')
