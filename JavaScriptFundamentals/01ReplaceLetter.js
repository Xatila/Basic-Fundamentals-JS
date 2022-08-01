function check(firstWord, letter, secondWord){

    let finalWord = '';
    for (let i = 0; i < firstWord.length; i++) {
        if(firstWord[i]==='_'){
            finalWord+=letter;
            continue;
        }
        finalWord = finalWord+firstWord[i];
    }
    finalWord===secondWord?console.log('matched!'):console.log('not matched!');
}
check("Str_ng", "i", "Strong");
check("Str_ng", "o", "Strong");