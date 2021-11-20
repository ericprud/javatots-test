// Corresponding javatots-test package: org.javatots.example.customerapp
import { Cli } from '../../../custdb/lib/customerdb/Cli';
import { Customer } from '../../../custdb/lib/customerdb/models/Customer';
import * as Yaml from 'js-yaml';
import { Writable } from 'stream';

export class Main {

  public static main(args: string[]): void /* throws FileNotFoundException */ {
    const dir: string = "../../../" + "customer-db/src/main/resources/";
    const c: Customer = loadCustomer(dir + "customer.yaml");
    console.log(c);
    const writer: Writable = new Writable();
    // new Yaml().dump(c, writer);
    // System.out.println(writer);
  }

  public static loadCustomer(readonly yamlFilePath: string): Customer /* throws FileNotFoundException */ {
    return new Cli().loadCustomer(yamlFilePath);
  }
}

Main.main(process.argv);

