function schoolGrades(input) {
  let object = {};
  for (let i = 0; i < input.length; i++) {
    let info = input[i].split(" ");
    let name = info[0];
    let gradesSum = 0;
    let count = info.length - 1;
    for (let j = 1; j < info.length; j++) {
      let grade = Number(info[j]);
      gradesSum += grade;
    }
    if (object.hasOwnProperty(name)) {
      count += info.length - 1;
      let averageGrade = gradesSum / count;
      if (i + 1 != -1) {
        continue;
      } else {
        object[name] = averageGrade.toFixed(2);
      }
    } else {
      gradesSum /= count;
      object[name] = gradesSum.toFixed(2);
    }
  }
  let sortedNames = [];
  for (const key in object) {
    sortedNames.push([key, object[key]]);
  }
  sortedNames.sort((a, b) => {
    const nameA = a[0].toUpperCase();
    const nameB = b[0].toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  for (const key of sortedNames) {
    console.log(`${key[0]}: ${key[1]}`);
  }
}
//schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
