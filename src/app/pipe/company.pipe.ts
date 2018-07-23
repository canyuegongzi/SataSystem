import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'company'
})
export class CompanyPipe implements PipeTransform {

  transform(list: any[], filterField: string, keyword: string): any {
    if (!filterField || !keyword) {
      return list;
    }
    return list.filter( item => {
      const fiedlValue = item[filterField];
      return fiedlValue.indexOf(keyword) >= 0;
    });
  }

}
