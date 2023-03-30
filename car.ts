class Car {
    make: string;
    model: string;
    year: number;
    currentSpeed: number;
    
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.currentSpeed = 0;
    }
    
    accelerate(speed: number): void {
      this.currentSpeed += speed;
      console.log(`The ${this.year} ${this.make} ${this.model} is now traveling at ${this.currentSpeed} mph.`);
    }
    
    decelerate(speed: number): void {
      this.currentSpeed -= speed;
      console.log(`The ${this.year} ${this.make} ${this.model} is now traveling at ${this.currentSpeed} mph.`);
    }
    
    stop(): void {
      this.currentSpeed = 0;
      console.log(`The ${this.year} ${this.make} ${this.model} has stopped.`);
    }
  }
  
  // Example usage
  const myCar = new Car("Toyota", "Corolla", 2018);
  
  myCar.accelerate(30);
  myCar.decelerate(10);
  myCar.accelerate(20);
  
  