import { useRoutes, Navigate } from 'react-router-dom';
import { MainPage, PersonPage, PersonPageEdit } from '../../pages';

export const RouterConfig = () => {
	const config = useRoutes([
		{
			path: '/',
			element: <Navigate to="/people" />,
		},
		{
			path: 'people',
			element: <MainPage />,
		},
		{
			path: 'person/:id',
			element: <PersonPage />,
		},
		{
			path: 'person/:id/edit',
			element: <PersonPageEdit />,
		},
	]);

	return config;
};
