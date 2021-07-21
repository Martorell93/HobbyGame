//Import clase Person
import { Person } from "./person";

//Declaración de objetos de la clase Person
let person1:Person = new Person("Juan Benitez", "Español", "Tester",
8);
let person2:Person = new Person("María Schimtz", "Alemán", "Manager",
14);
let person3:Person = new Person("Candela Urbastun", "Inglés",
"Developer", 4);
let person4:Person = new Person("Eddy Ramos", "Canadiense", "Director",
25);
let person5:Person = new Person("Emilia Romania", "Rumania", "Tester",
2);
let person6:Person = new Person("Miguel Delibes", "Español", 
"Developer", 6);
console.log("--------------------------------------------");
console.log("\n");

//Metodos get y set
console.log("Nombre del objeto persona1: ");
console.log(person1.getName());
console.log("Nacionalidad del objeto persona3: ");
console.log(person3.getNationality());
console.log("Profesión del objeto persona6: ");
console.log(person6.getProfession());
console.log("Años experiencia del objeto persona2: ");
console.log(person2.getExperienceYears());
console.log(person4.getName());
person4.setName("John McPello");
console.log("Ahora cambio a: " + person4.getName());
console.log(person5.getNationality());
person5.setNationality("Estadounidense");
console.log("Ahora cambio a: " + person5.getNationality());
console.log("--------------------------------------------");
console.log("\n");

//Método print all
console.log("Toda la información de la person3:");
person3.printAll;
console.log("--------------------------------------------");
console.log("\n");

//Método toString()
console.log("Información de person1 pero con sus atributos: ");
person1.toString();
console.log("--------------------------------------------");
console.log("\n");