package org.javatots.example.customerapp;

import org.javatots.example.customerdb.*;
import org.javatots.example.customerdb.models.Customer;
import org.yaml.snakeyaml.Yaml;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.io.StringWriter;

public class Main {
    public static void main(String[] args) throws FileNotFoundException {
        final String dir = "customer-db/src/main/resources/";
        Customer c = new Cli().loadCustomer(dir + "customer.yaml");
        System.out.println(c);
        StringWriter writer = new StringWriter();
        new Yaml().dump(c, writer);
        System.out.println(writer);
    }

    public Customer loadCustomer(final String yamlFilePath) throws FileNotFoundException {
        Yaml yaml = new Yaml();
        InputStream inputStream = new FileInputStream(yamlFilePath);
        return yaml.loadAs(inputStream, Customer.class);
    }
}
