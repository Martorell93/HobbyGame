//Import clase Plataforma
import { Platform } from "./platform";

//Declaración objetos de la clase Platform
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
console.log("--------------------------------------------");
console.log("\n");

//Mostrar todos los atributos de objeto plataform
console.log("Mostrar todos los atributos del objeto plataform2:");
plataform2.printAll();
console.log("--------------------------------------------");
console.log("\n");

//Mostrar a través de un string los atributos del objeto plataform
console.log("Mostrar en formato string todos los atributos del "
+ "obejeto plataform5:");
plataform5.toString();
console.log("--------------------------------------------");
console.log("\n");