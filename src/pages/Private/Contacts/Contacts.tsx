import React, { useState, useEffect } from 'react';
import './Contacts.css';
import { getUsers } from '../../../services';
import { User } from '../../../models';
import { Contact } from './components/Contact';

export type ContactsProps = {
}

const Contacts: React.FC<ContactsProps> = ({ }) => {

	const [contacts, setContacts] = useState<User[]>([]);

	const handleGetUsers = async () => {
		const data = await getUsers();
		setContacts(data);
	}

	useEffect(() => {
		handleGetUsers();
	}, [])
	

	return (
		<main className='main'>
			<h2>Contacts</h2>
			<button
				className='button btn btn-primary'
			><i className='bx bxs-user-plus'></i> Buscar Contactos</button>
			{
				contacts.map( contact => (
					<Contact key={contact.id} contact={contact} />
				) )
			}
		</main>
	)
};

export default Contacts;
