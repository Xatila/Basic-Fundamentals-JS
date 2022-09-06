function trackWords(input) {
    let wordsToMatch = input[0].split(' ');
    let object={};
    let sortedWords = [];
    for (let i = 1; i < input.length; i++) {
        let currentWord = input[i];
        for (const key in wordsToMatch) {
            if(wordsToMatch[key]===currentWord){
                !object.hasOwnProperty(currentWord)?object[currentWord]=1:object[currentWord]+=1;
                break;
            }
        }
    }
    for (const element in object) {
        sortedWords.push([[element], object[element]]);
    }
    sortedWords.sort((a,b)=>b[1]-a[1]);
    
    for (const word of sortedWords) {
        console.log(`${word[0]} - ${word[1]}`)
    }
    
}
trackWords([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    );

trackWords([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
