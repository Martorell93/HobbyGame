//Declaración clase Platform
export class Platform
{
    //Declaración tipo de variables
    private name:string;
    private releaseYear:number;
    private company:string;
    private nBits:number;
    private generation:number;
    private hasHD:boolean;
    private hdSize: number;
    private hasInternetConnection:boolean;
    private storageDevice:string;
    private color:string;

    //Constructor
    constructor (name:string, releaseYear:number, company:string,
    nBits:number, generation:number, hasHD:boolean, hdSize: number,
    hasInternetConection:boolean, storageDevice:string,color:string)
    {
        this.name = name;
        this.releaseYear = releaseYear;
        this.company = company;
        this.nBits = nBits;
        this.generation = generation;
        this.hasHD = hasHD;
        this.hdSize = hdSize;
        this.hasInternetConnection = hasInternetConection;
        this.storageDevice = storageDevice;
        this.color = color;
    }

    //Métodos
    public getName():string {
        return this.name;
    }
    public getReleaseYear():number {
        return this.releaseYear;
    }
    public getCompany():string {
        return this.company;
    }
    public getNBits():number {
        return this.nBits;
    }
    public getGeneration():number {
        return this.generation;
    }
    public getHasHD():boolean {
        return this.hasHD;
    }
    public gethdSize():number {
        return this.hdSize;
    }
    public getHasInternetConection():boolean {
        return this.hasInternetConnection;
    }
    public getStorageDevice():string {
        return this.storageDevice;
    }
    public getColor():string {
        return this.color;
    }
    public setName(name:string) {
        this.name = name;
    }
    public setReleaseYear(releaseYear:number) {
        this.releaseYear = releaseYear;
    }
    public setCompany(company:string) {
        this.company = company;
    }
    public setNBits(nBits:number) {
        this.nBits = nBits;
    }
    public setGeneration(generation:number) {
        this.generation = generation;
    }
    public setHasHD(hasHD:boolean) {
        this.hasHD = hasHD;
    }
    public setHdSize(hdSize:number) {
        this.hdSize = hdSize;
    }
    public setHasInternetConnection(hasInternetConnection:boolean) {
        this.hasInternetConnection = hasInternetConnection;
    }
    public setStorageDevice(storageDevice:string) {
        if (storageDevice === "Cartucho" || 
        storageDevice === "Tarjeta"
        || storageDevice === "Cd" || storageDevice === "Dvd"
        || storageDevice === "Blueray") {
            this.storageDevice = storageDevice;
        }
        else {
            console.log("Argumento no válido");
        }
    }
    public setColor(color:string) {
        this.color = color;
    }
    public sonLaMismaPersona(plataforma:Platform):boolean {
        let resultado:boolean = false;
        if (this.name === plataforma.getName() && 
        this.releaseYear === plataforma.getReleaseYear() &&
        this.company === plataforma.getCompany() &&
        this.nBits === plataforma.getNBits() &&
        this.generation === plataforma.getGeneration() &&
        this.hasHD === plataforma.getHasHD() &&
        this.hdSize === plataforma.gethdSize() &&
        this.hasInternetConnection === plataforma.getHasInternetConection()
        && this.storageDevice === plataforma.getStorageDevice() &&
        this.color === plataforma.getColor()) {
            resultado = true;
        }
        else {
            resultado = false;
        }
        return resultado;
    }
    public printAll() {
        console.log(this.name);
        console.log(this.releaseYear);
        console.log(this.company);
        console.log(this.nBits);
        console.log(this.generation);
        console.log(this.hasHD);
        console.log(this.hdSize);
        console.log(this.hasInternetConnection);
        console.log(this.storageDevice);
        console.log(this.color);
    }
    public toString() {
        console.log("Los atributos de " + this.name + " son:");
        console.log(" - Nombre: " + this.name);
        console.log(" - Año de lanzamiento: " + this.releaseYear);
        console.log(" - Compañia: " + this.company);
        console.log(" - Número de Bits: " + this.nBits);
        console.log(" - Generación: " + this.generation);
        console.log(" - ¿Tiene HD?: " + this.hasHD);
        console.log(" - Espacio de Disco Duro (GB): " + this.hdSize);
        console.log(" - ¿Tiene conexión a Internet?: " + 
        this.hasInternetConnection);
        console.log(" - Tipo de almacenamiento: " + 
        this.storageDevice);
        console.log(" - Color: " + this.color);
    }
}