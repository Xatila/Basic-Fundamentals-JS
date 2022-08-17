function asciFind(a,b){

    let start = Math.min(a.charCodeAt(0),b.charCodeAt(0));
    let end = Math.max(a.charCodeAt(0),b.charCodeAt(0));
    let arrayToFill = [];
    for (let i = start+1; i < end; i++) {
        arrayToFill.push(String.fromCharCode(i));
    }
    console.log(arrayToFill.join(' '));
}
asciFind('a','d')