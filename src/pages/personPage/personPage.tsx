import { useParams } from 'react-router-dom';
import { PersonEditable } from 'src/widgets';

type RouteParams = {
	id: string;
};

export const PersonPage = () => {
	const { id } = useParams<keyof RouteParams>() as RouteParams;

	return (
		<div className="container">
			<PersonEditable id={id} />
		</div>
	);
};
