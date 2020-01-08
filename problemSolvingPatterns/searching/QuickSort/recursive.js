Array.prototype.ntale = function(fn, thisArg, i=0){
    if(!(i in this)){
        return;
    }
    fn.bind(thisArg)(this[i], i, this);
    this.ntale(fn, thisArg, i + 1);
};

function showValues(v){
    console.log(v)
}

[23, 1, 6].ntale(showValues)
