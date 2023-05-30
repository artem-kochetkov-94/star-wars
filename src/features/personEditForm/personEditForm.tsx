import { personStore, useGetPerson, useUpdatePerson } from 'src/entities/people';
import { PersonEditFormProps } from './personEditForm.props';
import { observer } from 'mobx-react-lite';
import { Form, Formik } from 'formik';
import { schema } from './schema';
import { FormFieldNames } from './types';
import { Button, Col, Row } from 'antd';
import { FormItem } from 'src/shared/ui';
import { getFormikError } from 'src/shared/lib/getFormikError';
import { Styled } from './styles';
import { Input } from 'src/shared/ui/input';
import { useGoBack } from 'src/shared/hooks/useGoBack';

export const PersonEditForm: React.FC<PersonEditFormProps> = observer(({ id }) => {
	useGetPerson(id);
	const { updatePerson } = useUpdatePerson();
	const { goBack } = useGoBack();

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
					<Styled.Wrapper>
						<Form>
							<Row gutter={[0, 20]}>
								<Col span={24}>
									<Row gutter={[0, 10]}>
										<Col span={24}>
											<FormItem
												label="Name"
												error={getFormikError(FormFieldNames.Name, errors, touched)}
											>
												<Input name={FormFieldNames.Name} placeholder="Name" />
											</FormItem>
										</Col>
										<Col span={24}>
											<FormItem
												label="Height"
												error={getFormikError(FormFieldNames.Height, errors, touched)}
											>
												<Input name={FormFieldNames.Height} placeholder="Name" />
											</FormItem>
										</Col>
										<Col span={24}>
											<FormItem
												label="Mass"
												error={getFormikError(FormFieldNames.Mass, errors, touched)}
											>
												<Input name={FormFieldNames.Mass} placeholder="Name" />
											</FormItem>
										</Col>
									</Row>
								</Col>
								<Col span={24}>
									<Button type="primary" htmlType="submit" block size="large">
										Submit
									</Button>
								</Col>
								<Col span={24}>
									<Button type="primary" htmlType="submit" block size="large" onClick={goBack}>
										Back
									</Button>
								</Col>
							</Row>
						</Form>
					</Styled.Wrapper>
				);
			}}
		</Formik>
	);
});
