import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CheckpipesPipe implements PipeTransform {

  transform(value: number): number {
    console.log('Pure pipe transformed');
    return value * 2;
  }
}
