import { Button, Row, Col } from 'antd';
import { PaginationProps } from './pagination.props';

export const Pagination: React.FC<PaginationProps> = ({
	itemsCount,
	hasNext,
	hasPrevious,
	next,
	previous,
	isFetching,
}) => {
	return (
		<Row justify="end">
			<Col>
				<p>total: {itemsCount}</p>
			</Col>
			<Col span={24}>
				<Row gutter={10} justify="end">
					<Col>
						<Button type="primary" onClick={previous} disabled={isFetching || !hasPrevious}>
							previous
						</Button>
					</Col>
					<Col>
						<Button type="primary" onClick={next} disabled={isFetching || !hasNext}>
							next
						</Button>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};
