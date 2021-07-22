//Import clase Person/Platform/Videogame
import { Person } from "./person";
import { Platform } from "./platform";
import { Videogame } from "./videogame";

//Declaración objetos tipo Person
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

//Declaración objetos tipo Platform
let plataform1:Platform = new Platform("Nintedo 64", 1990, "Nintendo",
64, 3, false, 1, false, "Tarjeta", "Negro");
let plataform2:Platform = new Platform("PlayStation", 1994, "Sony",
64, 1, false, 4, false, "Cd", "Plata");
let plataform3:Platform = new Platform("Xbox 360", 2008, "Microsoft",
256, 2, true, 32, true, "Dvd", "Blanco");
let plataform4:Platform = new Platform("Wii", 2004, "Nintendo",
128, 5, false, 16, true, "Dvd", "Blanco");
let plataform5:Platform = new Platform("PlayStation 5", 2020, "Sony",
1028, 5, true, 128, true, "Bluray", "Blanco");

//Declaración de objetos tippo Videogame
let videojuego1:Videogame = new Videogame("Fifa 07", 2007, 
[person1, person5, person6], "Americano", person4, ["Inglés",
"Español", "Chino", "Japonés"], [plataform2, plataform3], 29, 8);
let videojuego2:Videogame = new Videogame("Uncharted", 2010, 
[person1, person3], "Americano", person3, ["Inglés",
"Español", "Ruso", "Alemán"], [plataform5, plataform4], 59, 8.9);
let videojuego3:Videogame = new Videogame("Crazy taxi", 1999, 
[person5, person2], "Americano", person3, [
"Español", "Francés", "Italiano"], [plataform1], 49, 7.3);
console.log("--------------------------------------------");
console.log("\n");

//Métodos sobre los objetos Videogame
console.log("Información del videojuego1:")
videojuego1.toString();
console.log("--------------------------------------------");
console.log("\n");

//Idioma del Videojuego
console.log("¿El videjuego2 está en chino?:")
videojuego2.idiomaVideojuego("Chino");
console.log("--------------------------------------------");
console.log("\n");

//Desarollado para plataforma3
console.log("¿El videojuego3 está desarrollado para la "
+ "plataforma 3?:")
videojuego3.estaPlataforma(plataform3);
console.log("--------------------------------------------");
console.log("\n");

//Desarrolladores involucrados
console.log("¿El desarrollador persona5 está incluido en el "
+ "videojuego2?:")
videojuego2.desarolladorIncluido(person5);
console.log("--------------------------------------------");
console.log("\n");