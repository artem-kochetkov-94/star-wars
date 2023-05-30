import { Button, Row, Col } from "antd";
import { PaginationProps } from "./pagination.props";

export const Pagination: React.FC<PaginationProps> = ({
  itemsCount,
  hasNext,
  hasPrevious,
  next,
  previous,
  isFetching,
}) => {
  return (
    <>
      <p>total: {itemsCount}</p>

      <Row gutter={10}>
        {hasPrevious && (
          <Col>
            <Button type="primary" onClick={previous} disabled={isFetching}>
              previous
            </Button>
          </Col>
        )}
        {hasNext && (
          <Col>
            <Button type="primary" onClick={next} disabled={isFetching}>
              next
            </Button>
          </Col>
        )}
      </Row>
    </>
  );
};
