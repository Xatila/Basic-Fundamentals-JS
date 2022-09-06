function showHeroes(array){
    class Hero{
        constructor(name, level, items){
            this.name=name;
            this.level=level;
            this.items=items;
        }
        print(){
            console.log(`Hero: ${this.name}\nlevel => ${this.level}\nitems => ${this.items}`);
        }
    }
    let heroes=[];
    for (let i = 0; i < array.length; i++) {
        let heroInfo = array[i].split(" /");
        let heroName = heroInfo[0];
        let heroLevel = Number(heroInfo[1]);
        let heroItems = heroInfo[2];
        heroes.push(new Hero(heroName,heroLevel,heroItems));
    }
    heroes.sort((a,b)=>a.level-b.level);
    for (const hero of heroes) {
       hero.print();
    }

}
showHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );