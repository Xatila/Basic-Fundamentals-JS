function catsGo(array) {
  class Cat {
    constructor(catName, catAge) {
      this.catName = catName;
      this.catAge = catAge;
    }
    meow() {
      console.log(`${this.catName}, age ${this.catAge} says Meow`);
    }
  }
  let cats = [];
  for (let i = 0; i < array.length; i++) {
    let tokens = array[i].split(' ');
    let catName = tokens[0];
    let catAge = tokens[1];
    cats.push(new Cat(catName, catAge));
  }

  for (const key of cats) {
    key.meow();
  }
}
catsGo(['Mellow 2', 'Tom 5']);
