package org.javatots.example.customerdb;

import lombok.SneakyThrows;
import org.javatots.example.customerdb.models.*;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class CliTest {
    @SneakyThrows
    @Test
    public void
    loadCustomer() {

        Customer customer = new Cli().loadCustomer("src/main/resources/customer.yaml");

        assertNotNull(customer);
        assertEquals("John", customer.getFirstName());
        assertEquals("Doe", customer.getLastName());
        assertEquals(31, customer.getAge());

        // contacts
        final List<Voicable> contacts = customer.getContacts();
        assertNotNull(contacts);
        assertEquals(2, contacts.size());

        assertEquals("mobile", contacts
                .get(0)
                .getType());
        assertEquals(123456789, contacts
                .get(0)
                .getNumber());
        assertEquals("landline", contacts
                .get(1)
                .getType());
        assertEquals(456786868, contacts
                .get(1)
                .getNumber());

        // addresses
        final Map<String, Address> addresses = customer.getAddresses();
        assertNotNull(addresses);
        assertEquals(2, addresses.size());
        final Address home = addresses.get("home");
        assertEquals("Xyz, DEF Street", home.getLine());
        final Address work = addresses.get("work");
        assertEquals("1 Two Street", work.getLine());
        final List<Voicable> homeContacts = home.getSiteContacts();
        assertEquals(1, homeContacts.size());
        assertEquals(987654321, homeContacts.get(0).getNumber());
    }
}