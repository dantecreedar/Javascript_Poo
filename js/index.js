function Persona(name, LastName, age) {
  this.name = name;
  this.LastName = LastName;
  this.age = age;
  this.fullData = function () {
    return console.log(`Yo soy ${this.name} ${this.LastName} y tengo ${this.age} años`)
  }
};
const userId_1 = new Persona("Alexis", "diaz", 23)
const userId_2 = new Persona("sofia", "mendez", 43)
const userId_3 = new Persona("jose", "perez", 32)
const userId_4 = new Persona("juan", "gabriel", 19)

userId_1.fullData()
userId_2.fullData()
userId_3.fullData()
userId_4.fullData()
