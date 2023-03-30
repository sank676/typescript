var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }
    Animal.prototype.makeSound = function () {
        console.log("".concat(this.name, " says ").concat(this.sound));
    };
    return Animal;
}());
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal(name, age, sound) {
        return _super.call(this, name, age, sound) || this;
    }
    Mammal.prototype.feedMilk = function () {
        console.log("".concat(this.name, " feeds milk"));
    };
    return Mammal;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, age, sound) {
        return _super.call(this, name, age, sound) || this;
    }
    Bird.prototype.fly = function () {
        console.log("".concat(this.name, " can fly"));
    };
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, age, sound) {
        return _super.call(this, name, age, sound) || this;
    }
    Fish.prototype.swim = function () {
        console.log("".concat(this.name, " can swim"));
    };
    return Fish;
}(Animal));
// Example usage
var dog = new Mammal("Rufus", 4, "woof");
var parrot = new Bird("Polly", 2, "squawk");
var goldfish = new Fish("Goldie", 1, "blub");
dog.makeSound(); // Rufus says woof
dog.feedMilk(); // Rufus feeds milk
parrot.makeSound(); // Polly says squawk
parrot.fly(); // Polly can fly
goldfish.makeSound(); // Goldie says blub
goldfish.swim(); // Goldie can swim
