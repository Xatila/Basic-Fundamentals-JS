function personInfo(firstName, lastName, age) {

    let Person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
    for (const element of Object.keys(Person)) {
        console.log(`${element}: ${Person[element]}`);
        
    }
}
personInfo("Peter", "Pan", "20");
