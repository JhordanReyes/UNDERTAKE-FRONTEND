import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../redux/store';
import { Navigate, Outlet } from 'react-router-dom';
import { PublicRoutes } from '../../models';

export type AuthGuardProps = {
}

const AuthGuard: React.FC<AuthGuardProps>  = ({}) => {

	const userState = useSelector((store: AppStore) => store.user)
	return userState.id ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />
};

export default AuthGuard;
