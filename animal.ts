class Animal {
    name: string;
    age: number;
    sound: string;
  
    constructor(name: string, age: number, sound: string) {
      this.name = name;
      this.age = age;
      this.sound = sound;
    }
  
    makeSound(): void {
      console.log(`${this.name} says ${this.sound}`);
    }
  }
  
  class Mammal extends Animal {
    constructor(name: string, age: number, sound: string) {
      super(name, age, sound);
    }
  
    feedMilk(): void {
      console.log(`${this.name} feeds milk`);
    }
  }
  
  class Bird extends Animal {
    constructor(name: string, age: number, sound: string) {
      super(name, age, sound);
    }
  
    fly(): void {
      console.log(`${this.name} can fly`);
    }
  }
  
  class Fish extends Animal {
    constructor(name: string, age: number, sound: string) {
      super(name, age, sound);
    }
  
    swim(): void {
      console.log(`${this.name} can swim`);
    }
  }
  
  // Example usage
  const dog = new Mammal("Rufus", 4, "woof");
  const parrot = new Bird("Polly", 2, "squawk");
  const goldfish = new Fish("Goldie", 1, "blub");
  
  dog.makeSound(); // Rufus says woof
  dog.feedMilk(); // Rufus feeds milk
  
  parrot.makeSound(); // Polly says squawk
  parrot.fly(); // Polly can fly
  
  goldfish.makeSound(); // Goldie says blub
  goldfish.swim(); // Goldie can swim
  