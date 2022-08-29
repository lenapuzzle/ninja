class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        return `Ninja's name is: ${this.name}!`;
    }
    showStats(){
        return `The ninja's stats are: \nStrength - ${this.strength}, \nSpeed - ${this.speed}, \nHealth - ${this.health}`;
    }
    drinkSake(){
        this.health += 10;
        return `Ninja's Health after drinking sake is: ${this.health}`;
    }
}
const coolNinja = new Ninja("Dojo", 50, 10, 10);

console.log(coolNinja.sayName());
console.log(coolNinja.showStats());
console.log(coolNinja.drinkSake());