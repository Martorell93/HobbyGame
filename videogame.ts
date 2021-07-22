//Import clase Person/Platform
import { Person } from './person';
import { Platform } from './platform';

//Declaración clase Videogame
export class Videogame
{
    private title:string;
    private releaseYear:number;
    private developers:Person[];
    private nacionality:string;
    private director:Person;
    private languages: string[];
    private platforms: Platform[];
    private price:number;
    private score:number;

    //Constructor
    constructor (title:string, releaseYear:number, 
    developers:Person[], nacionality:string, director:Person,
    languages:string[], platforms:Platform[], price:number,
    score:number)
    {
        this.title = title;
        this.releaseYear = releaseYear;
        this.developers = developers;
        this.nacionality = nacionality;
        this.director = director;
        this.languages = languages;
        this.platforms = platforms;
        this.price = price;
        this.score = score;
    }

    //Métodos
    public getTitle():string {
        return this.title;
    }
    public getReleaseYear():number {
        return this.releaseYear;
    }
    public getDevelopers():Person[] {
        return this.developers;
    }
    public getNacionality():string {
        return this.nacionality;
    }
    public getDirector():Person {
        return this.director;
    }
    public getLanguages():string[] {
        return this.languages;
    }
    public getPlatforms():Platform[] {
        return this.platforms;
    }
    public getPrice():number {
        return this.price;
    }
    public getScore():number {
        return this.score;
    }
    public setTitle(title:string) {
        this.title = title;
    }
    public setReleaseYear(releaseYear:number) {
        this.releaseYear = releaseYear;
    }
    public setDevelopers(developers:Person[]) {
        this.developers = developers;
    }
    public setLanguages(languages:string[]) {
        this.languages = languages;
    }
    public setPlatforms(platforms:Platform[]) {
        this.platforms = platforms;
    }
    public setPrice(price:number) {
        this.price = price;
    }
    public setScore(score:number) {
        if (score <= 10 && score >= 0 ) {
            this.score = score;
        }
        else {
            console.log("Argumento no válido");
        }
    }
    public estaPlataforma(plataforma:Platform) {
        let resultado:boolean = false;
        let i:number = 0;
        while (i < this.platforms.length &&!resultado) {
            if (this.platforms[i] === plataforma) {
                resultado = true;
            }
            i++;
        }
        console.log(resultado);
    }
    public desarolladorIncluido(dev:Person) {
        let resultado:boolean = false;
        let i:number = 0;
        while (i < this.developers.length && !resultado) {
            if (this.developers[i] === dev) {
                resultado = true;
            }
            i++;
        }
        console.log(resultado);
    }
    public idiomaVideojuego(idioma:string) {
        let resultado: boolean = false;
        let i:number = 0;
        while (i < this.languages.length && !resultado) {
            if (this.languages[i] === idioma) {
                resultado = true;
            }
            i++;
        }
        console.log(resultado);
    }
    public printAll() {
        console.log(this.title);
        console.log(this.releaseYear);
        console.log(this.developers);
        console.log(this.nacionality);
        console.log(this.director);
        console.log(this.languages);
        console.log(this.platforms);
        console.log(this.price);
        console.log(this.score);
    }
    public toString() {
        console.log("Los atributos del videojuego: " + this.title 
        + "son: ");
        console.log(" - Titulo: " + this.title);
        console.log(" - Año de lanzamiento: " + this.releaseYear);
        console.log(" - Desarrolladores: " + this.developers);
        console.log(" - Nacionalidad: " + this.nacionality);
        console.log(" - Director: " + this.director);
        console.log(" - Idiomas: " + this.languages);
        console.log(" - Plataformas: " + this.platforms);
        console.log(" - Precio(€): " + this.price);
        console.log(" - Puntuación: " + this.score);
    }
}