import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoLibros'
})
export class FormatoLibrosPipe implements PipeTransform {

  transform(value:number): string {
    let result:string;
    result = "Ref - " + value;
    return result;
  }

}
