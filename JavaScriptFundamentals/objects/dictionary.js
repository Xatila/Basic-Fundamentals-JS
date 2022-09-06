function solve(json){
    class Article{
        constructor(term, definition){
            this.term=term;
            this.definition=definition;
        }
        print(){
            console.log(`${this.term} ${this.definition}`)
        }
    }
    let articles=[];
    for (let i = 0; i < json.length; i++) {
        let tokens = json[i].split(':');
        let term = tokens[0];
        let definition = tokens[1];
        articles.push(new Article(term,definition));
    }
    for (const element of articles) {
        element.print();
    }
    
    
}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    );