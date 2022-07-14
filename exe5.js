const reverter = (string) => {
    const arr = [];
    for(let i=string.length-1; i>=0; i--){
        arr.push(string[i]);
    }
    return arr.join('');
};

console.log(reverter("!etartnoc eM"));