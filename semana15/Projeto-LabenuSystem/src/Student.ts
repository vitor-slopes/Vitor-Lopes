import { User } from "./User";
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { JSONFileManager } from "./JSONFileManager";

let now = 2020;

export class Student implements User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public birthDate: number,
    public hobbies: string[]
  ) {
    // super('src/students.json')
  }

  public getAge(): number {
    return now - this.birthDate
  }

  public setNewStudent2(student: Student): void {
    const fileManager = new JSONFileManager('src/students.json');
    let jsonData: Student[] = [];
    try {
      jsonData = fileManager.readFile();
    } catch (e) {
      console.log(e)
    }
    jsonData.push(student);
    fileManager.writeFile(jsonData)

    console.log(fileManager.readFile())

  }
}
