import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorName'
})
export class AuthorNamePipe implements PipeTransform {
  transform(middleName: string): string {
    if (middleName.length > 0) {
      if (middleName.indexOf('.') > -1) {
        return middleName;
      }

      return middleName[0] + '.';
    }

    return '';
  }
}
