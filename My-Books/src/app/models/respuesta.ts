import { Books } from "./books";

export class Respuesta{

    constructor(public error: boolean,
                public codigo: number,
                public mensaje: string,
                public data: Books | Books[]){

    }
}