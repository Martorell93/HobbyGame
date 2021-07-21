//Declaración clase Person
export class Person
{
    //Declaración de atributos
    private name:string;
    private nationality: string;
    private profession: string;
    private experienceYears:number;

    //Constructor
    constructor (name:string, nationality:string, profession:string,
        experienceYears: number) {
            this.name = name;
            this.nationality = nationality;
            this.profession = profession;
            this.experienceYears = experienceYears;
    }

    //Métodos
    public getName():string {
        return this.name;
    }
    public getNationality():string {
        return this.nationality;
    }
    public getProfession():string {
        return this.profession;
    }
    public getExperienceYears():number {
        return this.experienceYears;
    }
    public setName(name:string) {
        this.name = name;
    }
    public setNationality(nationality:string) {
        this.nationality = nationality;
    }
    public setProfession(profession:string) {
        if ((profession === "Developer") || (profession === "Tester")
        || profession === "Manager" || profession === "Director") {
            this.profession = profession;
        }
        else {
            console.log("Argumento no válido");
        }
    }
    public sonLaMismaPersona(persona:Person):boolean {
        let resultado:boolean = false;
        if (this.name === persona.getName() && 
        this.nationality === persona.getNationality() &&
        this.profession === persona.getProfession() &&
        this.experienceYears === persona.getExperienceYears()) {
            resultado = true;
        }
        else {
            resultado = false;
        }
        return resultado;
    }
    public printAll() {
        console.log(this.name);
        console.log(this.nationality);
        console.log(this.profession);
        console.log(this.experienceYears);
    }
    public toString() {
        console.log("Los atributos de " + this.name
        + " son:");
        console.log(" - Nombre: " + this.name);
        console.log(" - Nacionalidad: " + this.nationality);
        console.log(" - Profesión: " + this.profession);
        console.log(" - Años de experiencia: "
        + this.experienceYears);
    }
}