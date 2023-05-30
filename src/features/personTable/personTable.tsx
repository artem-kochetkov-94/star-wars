import { Table } from 'antd';
import { PersonListProps } from './personTable.props';
import { columns } from './columns';

export const PersonTable: React.FC<PersonListProps> = ({ data, isFetching }) => {
	return <Table dataSource={data} columns={columns} pagination={false} loading={isFetching} />;
};
