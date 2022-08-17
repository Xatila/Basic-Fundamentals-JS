function convert(firstName, middleName, hairColor){
    let PersonInfo = {
        firstName:firstName,
        middleName:middleName,
        hairColor:hairColor
    }

    console.log(JSON.stringify(PersonInfo));
    

}
convert('George', 'Jones', 'Brown');