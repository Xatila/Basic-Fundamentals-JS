function play(input){
    let object = {};
    let typeCards = {
        "S":4,
        "H":3,
        "D":2,
        "C":1
    }
    let numberCards = {
        "1":10,
        "2":2,
        "3":3,
        "4":4,
        "5":5,
        "6":6,
        "7":7,
        "8":8,
        "9":9,
        "J":11,
        "Q":12,
        "K":13,
        "A":14
    }
    for (let i = 0; i < input.length; i++) {
        let points = 0;
        let info = input[i].split(': ');
        let name = info[0];
        let cards = info[1].split(', ');
        for (let j = 0; j < cards.length; j++) {
            //
        }
    }
}
play([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]);