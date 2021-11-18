// Corresponding javatots-test package: org.javatots.example.customerdb.models
export class Customer {

   private firstName: String;

   private lastName: String;

   private age: int;

   private contacts: Array<Voicable>;

   private addresses: Map<String, Address>;

  public toString(): String {
    return "Customer{" + "firstName='" + firstName + '\'' + ", lastName='" + lastName + '\'' + ", age=" + age + ", contacts=" + contacts + ", addresses=" + addresses + '}';
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

  public setAge(age: int): void {
    this.age = age;
  }

  public getAge(): int {
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
