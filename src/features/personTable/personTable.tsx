import { Table } from 'antd';
import { PersonListProps } from './personTable.props';
import { columns } from './columns';

export const PersonTable: React.FC<PersonListProps> = ({ data }) => {
	if (!data || !data.length) {
		return <p>not data</p>;
	}

	return <Table dataSource={data} columns={columns} pagination={false} />;
};
