import React from 'react';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Header } from 'components/Header/Header';

const Contacts = () => {
    return (
        <Section title="PhoneBook">
            <ContactForm />
            <Header title="Contacts" />
            <Filter />
            <ContactList />
        </Section>
    );
}

export default Contacts;