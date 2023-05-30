import { PersonCard, personStore, useGetPerson } from 'src/entities/people';
import { PersonEditableProps } from './personEditable.props';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'antd';
import { useGoBack } from 'src/shared/hooks/useGoBack';

export const PersonEditable: React.FC<PersonEditableProps> = observer(({ id }) => {
	useGetPerson(id);
	const { goBack } = useGoBack();

	if (personStore.isFetching) {
		return <p className="center">fetching...</p>;
	}

	if (!personStore.data) {
		return <p className="center">not data</p>;
	}

	return (
		<PersonCard
			data={personStore.data}
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
