import { observer } from 'mobx-react';

import { PersonTable } from 'src/features';
import { useGetPeople, peopleStore } from 'src/entities/people';
import { Pagination } from 'src/shared/ui';
import { Col, Row } from 'antd';

export const People = observer(() => {
	useGetPeople();

	return (
		<>
			<Row>
				<Col span={24}>
					<PersonTable
						data={peopleStore?.data?.results || []}
						isFetching={peopleStore.isFetching}
					/>
				</Col>

				{peopleStore.data?.results.length && (
					<Col span={24}>
						<Row justify="end">
							<Col>
								<Pagination
									itemsCount={peopleStore.data.count}
									hasNext={!!peopleStore.data.next}
									hasPrevious={!!peopleStore.data.previous}
									previous={peopleStore.getPreviousPage}
									next={peopleStore.getNextPage}
									isFetching={peopleStore.isFetching}
								/>
							</Col>
						</Row>
					</Col>
				)}
			</Row>
		</>
	);
});
