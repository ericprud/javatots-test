// Corresponding javatots-test package: org.javatots.example.customerdb
import { Customer } from './models/Customer';
// import { Yaml } from org.yaml.snakeyaml;
import * as Yaml from 'js-yaml';
// import { FileInputStream } from java.io;
import * as Fs from 'fs';
// import { FileNotFoundException } from java.io;
// import { InputStream } from java.io;
import { Readable } from 'stream';
// import { StringWriter } from java.io;
import { Writable } from 'stream';

export class Cli {

  public static main(args: string[]): void /* throws FileNotFoundException */ {
    const dir: string = "../../../" + "customer-db/src/main/resources/";
    const c: Customer = new Cli().loadCustomer(dir + "customer.yaml");
    console.log(c);
    const writer: Writable = new Writable();
    // new Yaml().dump(c, writer);
    // console.log(writer);
  }

  public loadCustomer(/* readonly */ yamlFilePath: string): Customer /* throws FileNotFoundException */ {
    // const yaml: Yaml = new Yaml();
    const inputStream: Readable = Fs.createReadStream(yamlFilePath);
    return Yaml.load(Fs.readFileSync(yamlFilePath, 'utf-8')) as Customer;
    // return yaml.loadAs(inputStream, {});
  }
}
