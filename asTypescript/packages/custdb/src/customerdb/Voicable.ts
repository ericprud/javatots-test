// Corresponding javatots-test package: org.javatots.example.customerdb
export class Voicable {

   private type: String;

   private number: int;

  public toString(): String {
    return "Voicable{" + "type='" + type + '\'' + ", number=" + number + '}';
  }

  // getters and setters
  public setType(type: String): void {
    this.type = type;
  }

  public getType(): String {
    return this.type;
  }

  public setNumber(number: int): void {
    this.number = number;
  }

  public getNumber(): int {
    return this.number;
  }
}
