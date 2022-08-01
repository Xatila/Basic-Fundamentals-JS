function timeForFilm(input){
    //Read Input
    let filmName = input[0];
    let filmTime = Number(input[1]);
    let breakTime = Number(input[2]);

    //Business Logic
    let timePerEat = breakTime/8;
    let timePerChill = breakTime/4;
    let freeTime = breakTime-(timePerEat+timePerChill);
    let outTime = Math.ceil(filmTime-freeTime);

    //Print Output
    if(filmTime<=outTime){
        console.log(`You have enough time to watch ${filmName} and left with ${outTime} minutes free time.`)
    }else{
        console.log(`You don't have enough time to watch ${filmName}, you need ${outTime} more minutes.`);
    }

}
timeForFilm(["Game of Thrones",
"60",
"96"])






