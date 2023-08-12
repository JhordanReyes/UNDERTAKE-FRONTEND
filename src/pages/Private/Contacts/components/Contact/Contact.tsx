import React from 'react';
import './Contact.css';
import { User } from '../../../../../models';

export type ContactProps = {
	contact: User
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
	return (
		<div className='contact mt-1'>
			<h3>{contact.userName}</h3>
			<p>{contact.email}</p>
		</div>
	)
};

export default Contact;
