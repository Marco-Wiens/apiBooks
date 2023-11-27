

export class User{
    
    public id_user: number;
    public name: string;
    public apellido: string;
    public email: string;
    public imagen: string;
    public password: string;

    constructor(name:string, apellido: string, email:string, imagen: string, password: string){
        this.id_user = 0;
        this.name = name;
        this.apellido = apellido;
        this.email = email;
        this.imagen = imagen;
        this.password = password;
    }

}