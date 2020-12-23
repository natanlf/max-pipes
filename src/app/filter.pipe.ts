import { Pipe, PipeTransform } from '@angular/core';
/*
quando os dados são alterados o Angular não recarrega o Pipe,
podemos forçar isso mas assim teremos menos desempenho. => pure: false
Dessa forma o pipe e recalculado toda vez que os dados mudam
mas isso pode levar a problemas de desempenho
*/
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if(value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if(item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
