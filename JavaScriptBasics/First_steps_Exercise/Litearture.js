function calculate(input){
    let countPages = input[0];
    let pagesPerHour = input[1];
    let days = input[2];
    let timePerDay = countPages/pagesPerHour;
    let totalTime = timePerDay/days;
    console.log(totalTime);
}
calculate([212,20,2]);