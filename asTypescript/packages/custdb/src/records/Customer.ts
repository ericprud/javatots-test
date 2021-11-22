// Corresponding javatots-test package: org.javatots.example.customerdb.models
import { Constants } from '../Constants';
import { Address } from './Address';
import { Voicable } from './Voicable';

export class Customer {

   private firstName: string;

   private lastName: string;

   private age: number;

   private contacts: Array<Voicable>;

   private addresses: Map<string, Address>;

  public toString(): string {
    return "Customer{" + "firstName='" + this.firstName + '\'' + ", lastName='" + this.lastName + '\'' + ", age=" + this.age + ", contacts=" + this.contacts + ", addresses=" + this.addresses + '}';
  }

  public checkFoo(/* const */ foo: string): boolean {
    return Constants.Foo === foo;
  }

  // getters and setters
  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public setAge(age: number): void {
    this.age = age;
  }

  public getAge(): number {
    return this.age;
  }

  public setContacts(contacts: Array<Voicable>): void {
    this.contacts = contacts;
  }

  public getContacts(): Array<Voicable> {
    return this.contacts;
  }

  public setAddresses(addresses: Map<string, Address>): void {
    this.addresses = addresses;
  }

  public getAddresses(): Map<string, Address> {
    return this.addresses;
  }
}
