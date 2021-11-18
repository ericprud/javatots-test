// Corresponding javatots-test package: org.javatots.example.customerdb.models
import { Voicable } from './Voicable';

export class Address {

   private type: String;

   private line: String;

   private city: String;

   private state: String;

   private zip: number;

   private siteContacts: Array<Voicable>;

  public toString(): String {
    return "Address{" + "type='" + this.type + '\'' + ", line='" + this.line + '\'' + ", city='" + this.city + '\'' + ", state='" + this.state + '\'' + ", zip=" + this.zip + ", siteContacts=" + this.siteContacts + '}';
  }

  // getters and setters
  public setType(type: String): void {
    this.type = type;
  }

  public getType(): String {
    return this.type;
  }

  public setLine(line: String): void {
    this.line = line;
  }

  public getLine(): String {
    return this.line;
  }

  public setCity(city: String): void {
    this.city = city;
  }

  public getCity(): String {
    return this.city;
  }

  public setState(state: String): void {
    this.state = state;
  }

  public getState(): String {
    return this.state;
  }

  public setZip(zip: number): void {
    this.zip = zip;
  }

  public getZip(): number {
    return this.zip;
  }

  public setSiteContacts(siteContacts: Array<Voicable>): void {
    this.siteContacts = siteContacts;
  }

  public getSiteContacts(): Array<Voicable> {
    return this.siteContacts;
  }
}
