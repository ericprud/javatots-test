// Corresponding javatots-test package: org.javatots.example.customerapp
import { Customer } from '../../../custdb/lib/customerdb/models/Customer';
import { Cli } from '../../../custdb/lib/customerdb/Cli';
// import { Yaml } from org.yaml.snakeyaml;
import * as Yaml from 'js-yaml';
// import { FileInputStream } from java.io;
import * as Fs from 'fs';
// import { FileNotFoundException } from java.io;
// import { InputStream } from java.io;
import { Readable } from 'stream';
// import { StringWriter } from java.io;
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

