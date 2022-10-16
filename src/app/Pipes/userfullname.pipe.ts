import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userfullname'
})
export class UserfullnamePipe implements PipeTransform {

  transform(firstName: string, ...lastName: string[]): unknown {
    debugger
    return firstName +" "+ lastName.join(" ");
  }

}
