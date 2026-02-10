// Task 1
class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  sound(): void {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name, "dog");
    this.breed = breed;
  }

  sound(): void {
    console.log("The dog barks");
  }
}

// Task 2
class Library {
  static totalBooks: number = 0;

  addBook(): void {
    Library.totalBooks++;
  }
}

// Task 3
class Vehicle {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

class Motorcycle extends Vehicle {
  type: string;

  constructor(make: string, model: string, type: string) {
    super(make, model);
    this.type = type;
  }
}
