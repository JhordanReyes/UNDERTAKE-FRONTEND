import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { PublicRoutes } from '../../../models';
import { TextField } from '@mui/material';
import "../../Auth.css";

export type RegisterProps = {
}

const Register: React.FC<RegisterProps> = ({ }) => {
	return (
		<div className='register'>
			<div className='register-form'>
				<h1>Crea tu cuenta ✨</h1>

				<Link
					className='btn btn-primary register-link text-center'
					to={`/${PublicRoutes.LOGIN}`}
				>Volver</Link>
				<form className='mt-1'>
					<TextField
						label='Ingresar Email'
						type='email'
						name='email'
						variant="outlined"
						fullWidth
						autoComplete='off'
					/>
					<TextField
						label='Ingresar  Nombre'
						type='text'
						name='name'
						variant="outlined"
						fullWidth
					/>
					<TextField
						label='Contraseña'
						type='password'
						name='password'
						variant="outlined"
						fullWidth
						autoComplete='off'
					/>
					<input
						type="submit" value="Crear Cuenta"
						className='btn btn-success'
					/>
				</form>
				<p className='register-form-link mt-1'>Tienes una cuenta? <Link to={"/"+PublicRoutes.LOGIN} >Iniciar Sesión</Link></p>
			</div>
			<div className='auth-image'></div>

		</div>
	)
};

export default Register;
