// Corresponding javatots-test package: org.javatots.example.customerapp
import { Customer } from '../../../custdb/lib/customerdb/models/Customer';
import { Cli } from '../../../custdb/lib/customerdb/Cli';
import * as Yaml from 'js-yaml';
import * as Fs from 'fs';
import { Readable } from 'stream';
import { Writable } from 'stream';

export class Main {

  public static main(args: string[]): void /* throws FileNotFoundException */ {
    const dir: string = "../../../" + "customer-db/src/main/resources/";
    const c: Customer = new Cli().loadCustomer(dir + "customer.yaml");
    console.log(c);
    const writer: Writable = new Writable();
    // new Yaml().dump(c, writer);
    // System.out.println(writer);
  }
}

Main.main(process.argv);

