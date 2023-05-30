import { PersonCard, personStore } from 'src/entities/people';
import { PersonEditableProps } from './personEditable.props';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'antd';
import { useGoBack } from 'src/shared/hooks/useGoBack';
import { useGetPerson } from 'src/entities/people/lib/hooks/useGetPerson';

export const PersonEditable: React.FC<PersonEditableProps> = observer(({ id }) => {
	useGetPerson(id);
	const { goBack } = useGoBack();
	const { data, isFetching } = personStore;

	if (isFetching) {
		return <p className="center">fetching...</p>;
	}

	if (!data) {
		return <p className="center">not data</p>;
	}

	return (
		<PersonCard
			data={data}
			controlsSlot={
				<Row gutter={[0, 10]}>
					<Col span={24}>
						<Link to={`/person/${id}/edit`}>
							<Button type="primary" block size="large">
								Edit
							</Button>
						</Link>
					</Col>
					<Col span={24}>
						<Button type="primary" block onClick={goBack} size="large">
							Back
						</Button>
					</Col>
				</Row>
			}
		/>
	);
});
