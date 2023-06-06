import { Button, Col, Row } from 'antd';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { Input } from 'src/shared/ui';
import { schema } from './model/schema';
import { SearchFormProps } from './searchForm.props';
import { FormFieldNames } from './types/formFieldNames';

export const SearchForm: React.FC<SearchFormProps> = ({ value, onSubmit }) => {
	const [initialData] = useState({
		search: value,
	});

	return (
		<>
			<Formik
				initialValues={initialData}
				validationSchema={schema}
				enableReinitialize
				onSubmit={(values) => {
					onSubmit(values.search);
				}}
			>
				{({ submitForm }) => {
					return (
						<Form>
							<Row gutter={10} align="middle">
								<Col span={6}>
									<Input name={FormFieldNames.Search} placeholder="Search..." />
								</Col>
								<Col span={6}>
									<Button onClick={submitForm} type="primary">
										search
									</Button>
								</Col>
							</Row>
						</Form>
					);
				}}
			</Formik>
		</>
	);
};
