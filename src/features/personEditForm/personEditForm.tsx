import { personStore, useGetPerson, useUpdatePerson } from 'entities/people';
import { PersonEditFormProps } from './personEditForm.props';
import { observer } from 'mobx-react-lite';
import { Field, Form, Formik } from 'formik';
import { schema } from './schema';
import { FormFieldNames } from './types';
import { Button, Col, Row } from 'antd';
import { FormItem } from 'shared/ui';
import { getFormikError } from 'shared/lib/getFormikError';

export const PersonEditForm: React.FC<PersonEditFormProps> = observer(({ id }) => {
	useGetPerson(id);
	const { updatePerson } = useUpdatePerson();

	if (personStore.isFetching) {
		return <p>fetching...</p>;
	}

	if (!personStore.data) {
		return <p>not data</p>;
	}

	return (
		<Formik
			initialValues={personStore.data}
			validationSchema={schema}
			enableReinitialize
			onSubmit={(values) => {
				updatePerson({
					id,
					data: values,
				});
			}}
		>
			{({ touched, errors }) => {
				return (
					<Form>
						<Row gutter={[0, 10]}>
							<Col span={24}>
								<FormItem label="Name" error={getFormikError(FormFieldNames.Name, errors, touched)}>
									<Field name={FormFieldNames.Name} placeholder="Name" />
								</FormItem>
							</Col>
							<Col span={24}>
								<FormItem
									label="Height"
									error={getFormikError(FormFieldNames.Height, errors, touched)}
								>
									<Field name={FormFieldNames.Height} placeholder="Name" />
								</FormItem>
							</Col>
							<Col span={24}>
								<FormItem label="Mass" error={getFormikError(FormFieldNames.Mass, errors, touched)}>
									<Field name={FormFieldNames.Mass} placeholder="Name" />
								</FormItem>
							</Col>
							<Col>
								<Button type="primary" htmlType="submit">
									submit
								</Button>
							</Col>
						</Row>
					</Form>
				);
			}}
		</Formik>
	);
});
