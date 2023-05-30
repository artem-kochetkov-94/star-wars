import { Link } from 'react-router-dom';
import { Person, getUrlId } from 'src/entities/people';

export const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Height',
		dataIndex: 'mass',
		key: 'height',
	},
	{
		title: 'Mass',
		dataIndex: 'mass',
		key: 'mass',
	},
	{
		title: 'Birth Year',
		dataIndex: 'birth_year',
		key: 'birth_year',
	},
	{
		title: 'Detailed link',
		dataIndex: 'url',
		key: 'url',
		render: (text: Person['url'], record: Person): JSX.Element => {
			return <Link to={`/person/${getUrlId(text)}`}>{record.name}</Link>;
		},
	},
];
