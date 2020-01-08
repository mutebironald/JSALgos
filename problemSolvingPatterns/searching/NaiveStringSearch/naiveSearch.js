function naiveSearch(long, short){
    let count = 0;
    for(let i = 0; i < long.length; i++){
        for(let k = 0; k < short.length; k++){
            if(short[k] !== long[i + k]){
                break
            }
            if(k === short.length - 1 ){
                count++
            }
        }
    }
    console.log("+++", count)
    return count;
}

naiveSearch("lolrie loled", "lol")
