import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(allNotes: any[], note: string): any[] {
    return allNotes.filter((n) =>
      n.title.toLowerCase().includes(note.toLowerCase())
    );
  }
}
