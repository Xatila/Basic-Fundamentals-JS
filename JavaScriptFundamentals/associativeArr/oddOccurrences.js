function solve(input) {
  let info = input.split(" ");
  let object = {};
  let sortedWords = [];
  for (let i = 0; i < info.length; i++) {
    let currentWord = info[i].toLowerCase();
    let countMatches = 0;
    for (let j = 0; j < info.length; j++) {
      let nextWord = info[j].toLowerCase();
      if (nextWord == currentWord) {
        countMatches++;
      }
    }
    object[currentWord] = countMatches;
  }
  for (const key in object) {
    sortedWords.push([[key], object[key]]);
  }
  for (const word of sortedWords) {
    if (word[1] % 2 != 0) {
      console.log(`${word[0]}`);
    }
  }
}
solve("Cake IS SWEET is Soft CAKE sweet Food");
solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
