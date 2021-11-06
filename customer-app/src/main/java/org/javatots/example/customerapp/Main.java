package org.javatots.example.customerapp;

import org.javatots.example.customerdb.Cli;
import org.javatots.example.customerdb.Customer;

import java.io.FileNotFoundException;

public class Main {
    public Main() throws FileNotFoundException {
        Customer customer = new Cli().loadCustomer("src/main/resources/customer.yaml");
    }
}
