import { useNavigate } from 'react-router-dom';

type UseGoBack = () => {
	goBack: VoidFunction;
};

export const useGoBack: UseGoBack = () => {
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};

	return { goBack };
};
