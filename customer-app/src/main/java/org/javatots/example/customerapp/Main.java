package org.javatots.example.customerapp;

import org.javatots.example.customerdb.Cli;
import org.javatots.example.customerdb.models.Customer;
import org.yaml.snakeyaml.Yaml;

import java.io.FileNotFoundException;
import java.io.StringWriter;

public class Main {
    public static void main(final String[] args) throws FileNotFoundException {
        final String dir = "customer-db/src/main/resources/";
        final Customer c = loadCustomer(dir + "customer.yaml");
        System.out.println(c);
        final StringWriter writer = new StringWriter();
        new Yaml().dump(c, writer);
        System.out.println(writer);
    }

    public static Customer loadCustomer(final String yamlFilePath) throws FileNotFoundException {
        return new Cli().loadCustomer(yamlFilePath);
    }
}
