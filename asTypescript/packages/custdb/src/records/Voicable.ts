// Corresponding javatots-test package: org.javatots.example.customerdb.models
export class Voicable {

   private type: string;

   private number: number;

  public toString(): string {
    return "Voicable{" + "type='" + this.type + '\'' + ", number=" + this.number + '}';
  }

  public constructor() {
  }

  public constructor(type: string, number: number) {
    this.type = type;
    this.number = number;
  }

  public setType(type: string): void {
    this.type = type;
  }

  public getType(): string {
    return this.type;
  }

  public setNumber(number: number): void {
    this.number = number;
  }

  public getNumber(): number {
    return this.number;
  }
}
