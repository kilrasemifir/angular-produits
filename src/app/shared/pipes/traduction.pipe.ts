import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traduction'
})
export class TraductionPipe implements PipeTransform {

  dict : any = {
    en: {hello: 'hello'},
    fr: {hello: 'bonjour'}
  }

  langue: string = 'fr';

  transform(value: string, ...args: unknown[]): any {
    return this.dict[this.langue][value];
  }

}
