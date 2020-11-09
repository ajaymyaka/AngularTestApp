import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ajpipe'
})
export class AjpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
