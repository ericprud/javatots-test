// Corresponding javatots-test package: org.javatots.example.customerdb.models
import { Voicable } from './Voicable';
import { Address } from './Address';

export class Customer {

   private firstName: String;

   private lastName: String;

   private age: number;

   private contacts: Array<Voicable>;

   private addresses: Map<String, Address>;

  public toString(): String {
    return "Customer{" + "firstName='" + this.firstName + '\'' + ", lastName='" + this.lastName + '\'' + ", age=" + this.age + ", contacts=" + this.contacts + ", addresses=" + this.addresses + '}';
  }

  // getters and setters
  public setFirstName(firstName: String): void {
    this.firstName = firstName;
  }

  public getFirstName(): String {
    return this.firstName;
  }

  public setLastName(lastName: String): void {
    this.lastName = lastName;
  }

  public getLastName(): String {
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

  public setAddresses(addresses: Map<String, Address>): void {
    this.addresses = addresses;
  }

  public getAddresses(): Map<String, Address> {
    return this.addresses;
  }
}
