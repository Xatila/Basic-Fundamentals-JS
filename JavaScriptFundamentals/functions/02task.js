function findMax(num1, num2, num3) {
  let array = [num1, num2, num3];
  let find = (array) => Math.max(...array);
  console.log(find(array));
}
findMax(1, 2, 3);
