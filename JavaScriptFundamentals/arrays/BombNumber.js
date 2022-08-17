function bombNumbers(array, bomb) {
  let bombNum = bomb[0];
  let power = bomb[1];
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    if (bombNum == currentNum) {
      array.splice(currentNum,1);
        array.splice(currentNum,power);
        array.reverse();
        array.splice(currentNum,power);
    }
  }
  let sum = 0;
  for (const element of array) {
    sum+=Number(element);
  }
  console.log(sum-bombNum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
