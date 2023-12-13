import { Table } from 'antd';
import { columns } from './columns';
import { PersonListProps } from './personTable.props';

export const PersonTable: React.FC<PersonListProps> = ({ data, isFetching }) => {
	return (
		<Table
			dataSource={data}
			columns={columns}
			pagination={false}
			loading={isFetching}
			rowKey={'name'}
		/>
	);
};
