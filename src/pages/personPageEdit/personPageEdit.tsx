import { useParams } from 'react-router-dom';
import { PersonEditForm } from 'src/features';

type RouteParams = {
	id: string;
};

export const PersonPageEdit = () => {
	const { id } = useParams<keyof RouteParams>() as RouteParams;

	return (
		<div className="container">
			<PersonEditForm id={id} />
		</div>
	);
};
