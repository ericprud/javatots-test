// Corresponding javatots-test package: org.javatots.example.customerdb.models
export class Voicable {

   private type: String;

   private number: number;

  public toString(): String {
    return "Voicable{" + "type='" + this.type + '\'' + ", number=" + this.number + '}';
  }

  // getters and setters
  public setType(type: String): void {
    this.type = type;
  }

  public getType(): String {
    return this.type;
  }

  public setNumber(number: number): void {
    this.number = number;
  }

  public getNumber(): number {
    return this.number;
  }
}
