// Corresponding javatots-test package: org.javatots.example.customerapp
import { Cli } from org.javatots.example.customerdb;
import { Customer } from org.javatots.example.customerdb;
import { Yaml } from org.yaml.snakeyaml;
import { FileInputStream } from java.io;
import { FileNotFoundException } from java.io;
import { InputStream } from java.io;
import { StringWriter } from java.io;

export class Main {

  public static main(args: String[]): void /* throws FileNotFoundException */ {
    const dir: String = "customer-db/src/main/resources/";
    c: Customer = new Cli().loadCustomer(dir + "customer.yaml");
    System.out.println(c);
    writer: StringWriter = new StringWriter();
    new Yaml().dump(c, writer);
    System.out.println(writer);
  }

  public loadCustomer(readonly yamlFilePath: String): Customer /* throws FileNotFoundException */ {
    yaml: Yaml = new Yaml();
    inputStream: InputStream = new FileInputStream(yamlFilePath);
    return yaml.loadAs(inputStream, Customer.class);
  }
}
