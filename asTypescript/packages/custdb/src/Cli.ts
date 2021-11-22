// Corresponding javatots-test package: org.javatots.example.customerdb
import { Customer } from './models/Customer';
import * as Yaml from 'js-yaml';
import * as Fs from 'fs';
import { Readable } from 'stream';
import { Writable } from 'stream';
import { Constants } from './Constants';

export class Cli {

  public static main(args: string[]): void /* throws FileNotFoundException */ {
    const dir: string = "../../../" + "customer-db/src/main/resources/";
    const c: Customer = new Cli().loadCustomer(dir + "customer.yaml");
    console.log("check foo: " + c.checkFoo(Constants.Foo));
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
