import React from 'react';
import './Logout.css';
import { useDispatch } from 'react-redux';
import { resetUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../models';
import Swal from 'sweetalert2';
import { removeDarkMode } from '../../redux/slices/darkModeSlice';
import { AlertSucces } from '../Alerts';

export type LogoutProps = {
}

const Logout: React.FC<LogoutProps> = ({ }) => {

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleLogout = () => {
		Swal.fire({
			title: "Estas seguro?",
			text: "Estarás cerrando tu sesión!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, cerrar!'
		}).then((result) => {
			if (result.isConfirmed) {
				AlertSucces('Te esperamos!','Sesión cerrada correctamente');
				dispatch(resetUser())
				dispatch(removeDarkMode())
				navigate("/" + PublicRoutes.LOGIN)
			}
		})
	}

	return <button className='logout' onClick={handleLogout}>Logout</button>
};

export default Logout;
