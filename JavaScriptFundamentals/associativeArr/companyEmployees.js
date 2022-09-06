function showCompaniesStaff(input) {
  let object = {};
  for (let i = 0; i < input.length; i++) {
    let employees =[];
    let info = input[i].split(" -> ");
    let companyName = info[0];
    let emplId = info[1];
    if(!object.hasOwnProperty(companyName)){
      object[companyName]=employees;
    }else{
      object[companyName]=employees.push(emplId);
    }

    

    
  }
  console.log(object);
}
showCompaniesStaff([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
