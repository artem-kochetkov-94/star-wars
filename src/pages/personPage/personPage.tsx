import { useParams } from 'react-router-dom';
import { PersonEditable } from 'src/widgets';

type RouteParams = {
	id: string;
};

export const PersonPage = () => {
	const { id } = useParams<keyof RouteParams>() as RouteParams;

	return <PersonEditable id={id} />;
};
