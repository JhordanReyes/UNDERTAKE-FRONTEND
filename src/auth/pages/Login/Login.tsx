import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../../../models';
import { TextField } from '@mui/material';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../redux/slices/userSlice';
import "../../Auth.css";

export type LoginProps = {
}

interface UserForm {
	email: string,
	password: string
}

const INITIAL_STATE: UserForm = {
	email: "",
	password: ""
}

const Login: React.FC<LoginProps> = ({ }) => {

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [userForm, setUserForm] = useState<UserForm>(INITIAL_STATE)

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (userForm.email === "" || userForm.password === "") {
			Swal.fire("Campos Incompletos","Todos los campos son requeridos.","warning")
			return
		}
		dispatch(createUser(userForm))
		navigate(`/${PrivateRoutes.PRIVATE}`)
	}

	const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target
		setUserForm({
			...userForm,
			[name]: value
		})
	}

	return (
		<div className='login'>
			<div className='login-form'>
				<h1>Undertake</h1>
				<h2
					className='mb-1'
				>Bienvenido de nuevo! ✨</h2>
				<form
					onSubmit={event => onSubmit(event)}
				>
					<TextField
						id="outlined-basic"
						label='Correo Electrónico'
						type='email'
						name='email'
						variant="outlined"
						fullWidth
						onChange={(event) => onChange(event)}
					/>
					<TextField
						label="Contraseña"
						type='password'
						name='password'
						fullWidth
						autoComplete='off'
						onChange={(event) => onChange(event)}
					/>
					<input
						type="submit"
						value="Iniciar Sesión"
						className='btn btn-primary'
					/>
				</form>
				<hr className='mt-1' />
				<Link
					to={`/${PublicRoutes.REGISTER}`}
					className='btn btn-success login-link text-center mt-1'
				>Crear Cuenta Nueva</Link>
			</div>
			<div className='auth-image'></div>
		</div>
	)
};

export default Login;