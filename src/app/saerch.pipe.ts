import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'saerch'
})
export class SaerchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
