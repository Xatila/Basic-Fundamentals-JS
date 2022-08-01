function calculate(input){
    //Преобразуване на масив от стрингове в числа:
    //let array = input.map(i=>Number(i));
    let bonus = 0;
    let number = input[0];
    if(number<=100){
        bonus=5;
    }else if(number>1000){
        bonus=number*1.1;
    }else{
        bonus=number*1.2;
    }
    if(number%2==0){
        bonus++;
    }else if(number%2==5){
        bonus+=2;
    }
    console.log(bonus);
    console.log(number+bonus)
}
calculate([2703]);