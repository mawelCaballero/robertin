import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "columnTitle" })
export class ColumnTitlePipe implements PipeTransform {
  transform(value: string, args?: any): string {
    return value
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, function (str: string) {
        return str.toUpperCase();
      });
  }
}
