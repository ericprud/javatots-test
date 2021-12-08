package org.javatots.example.customerdb;

import org.javatots.example.customerdb.models.Customer;
import org.yaml.snakeyaml.Yaml;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.io.StringWriter;
import org.javatots.example.customerdb.Constants;

public class Cli {
    public static void main(final String[] args) throws FileNotFoundException {
        final String dir = "customer-db/src/main/resources/";
        final Customer c = new Cli().loadCustomer(dir + "customer.yaml");
        System.out.println("check foo: " + c.checkFoo(Constants.Foo));
        System.out.println(c);
        final StringWriter writer = new StringWriter();
        new Yaml().dump(c, writer);
        System.out.println(writer);
    }

    public Cli() throws FileNotFoundException, ArithmeticException {

    }

    public Customer loadCustomer(final String yamlFilePath) throws FileNotFoundException {
        final Yaml yaml = new Yaml();
        final InputStream inputStream = new FileInputStream(yamlFilePath);
        return yaml.loadAs(inputStream, Customer.class);
    }
}
