// Corresponding javatots-test package: org.javatots.example.customerdb.models
import { Voicable } from './Voicable';

export class Address {

   private type: string;

   private line: string;

   private city: string;

   private state: string;

   private zip: number;

   private siteContacts: Array<Voicable>;

  public toString(): string {
    return "Address{" + "type='" + this.type + '\'' + ", line='" + this.line + '\'' + ", city='" + this.city + '\'' + ", state='" + this.state + '\'' + ", zip=" + this.zip + ", siteContacts=" + this.siteContacts + '}';
  }

  // getters and setters
  public setType(type: string): void {
    this.type = type;
  }

  public getType(): string {
    return this.type;
  }

  public setLine(line: string): void {
    this.line = line;
  }

  public getLine(): string {
    return this.line;
  }

  public setCity(city: string): void {
    this.city = city;
  }

  public getCity(): string {
    return this.city;
  }

  public setState(state: string): void {
    this.state = state;
  }

  public getState(): string {
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
