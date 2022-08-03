function explore(input){

    let health = 100;
    let coins = 0;
    let rooms = input[0].split('|');
    for (let i = 0; i < rooms.length; i++) {
            let room = rooms[i].split(' ');
            let monsterOrItem = room[0];
            let points = Number(room[1]);
            let healedPoints = points;
        switch (monsterOrItem) {
            case 'potion':
                if(health<100){
                    
                    if(health+points<=100){
                        health+=points;
                    }else{
                        healedPoints=100-health;
                        health=100;
                    }
                }
                console.log(`You healed for ${healedPoints} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                console.log(`You found ${points} coins.`);
                coins+=points;
                break;
            default:
                if(health<=points){
                    return console.log(`You died! Killed by ${monsterOrItem}.\nBest room: ${i+1}`);
                }else{
                    health-=points;
                    console.log(`You slayed ${monsterOrItem}.`)
                }
            }
        }
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`)

}
explore(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// explore(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);