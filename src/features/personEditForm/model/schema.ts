import { FormFieldNames } from '../types/formFieldNames';
import * as Yup from 'yup';

const INVALID_NUMBER_ERROR = 'Must be a number';

export const schema = Yup.object().shape({
	[FormFieldNames.Name]: Yup.string().required('Required'),
	[FormFieldNames.Height]: Yup.number()
		.min(50)
		.required('Required')
		.typeError(INVALID_NUMBER_ERROR),
	[FormFieldNames.Mass]: Yup.number().min(1).required('Required').typeError(INVALID_NUMBER_ERROR),
	// ...
});
