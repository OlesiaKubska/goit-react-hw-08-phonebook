import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Header } from 'components/Header/Header';
import { fetchContacts } from 'redux/operations';

const Contacts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

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