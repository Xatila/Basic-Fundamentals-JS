function occurrencess(input) {

    //Read and store words.
  let storedWords = {};
  for (let i = 0; i < input.length; i++) {
    let currentWord = input[i];
    if (!storedWords.hasOwnProperty(currentWord)) {
      storedWords[currentWord] = 0;
    }
    for (let j = 1; j < input.length; j++) {
      let nextWord = input[j];
      if (currentWord == nextWord) {
        storedWords[currentWord] += 1;
        break;
      }
    }
  }
    //Converting to array and sort it.
  let soretedWords = [];
  for (const key in storedWords) {
    soretedWords.push([[key], storedWords[key]]);
  }
  soretedWords.sort((a, b) => b[1] - a[1]);

    //Printing.
  for (const key of soretedWords) {
    console.log(`${key[0]} -> ${key[1]} times`);
  }
}
//occurrencess(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
occurrencess(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
