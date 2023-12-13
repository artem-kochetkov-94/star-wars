import { Button, Col, Row, Spin } from 'antd';
import { Form, Formik } from 'formik';
import { observer } from 'mobx-react';
import { personStore } from 'src/entities/people';
import { useGetPerson } from 'src/entities/people/lib/hooks/useGetPerson';
import { useGoBack } from 'src/shared/hooks/useGoBack';
import { getFormikError } from 'src/shared/lib/getFormikError';
import { FormItem } from 'src/shared/ui';
import { Input } from 'src/shared/ui/input';
import { schema } from '../model/schema';
import { FormFieldNames } from '../types/formFieldNames';
import { PersonEditFormProps } from './personEditForm.props';
import { Styled } from './styles';

export const PersonEditForm: React.FC<PersonEditFormProps> = observer(({ id }) => {
	useGetPerson(id);

	const { goBack } = useGoBack();
	const { isFetching, data, updatePerson } = personStore;

	if (!data && isFetching) {
		return <p className="center">fetching...</p>;
	}

	if (!data) {
		return <p className="center">not data</p>;
	}

	return (
		<Formik
			initialValues={data}
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
						{isFetching && (
							<Styled.Loader>
								<Spin />
							</Styled.Loader>
						)}
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
									<Button type="primary" block size="large" onClick={goBack}>
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
