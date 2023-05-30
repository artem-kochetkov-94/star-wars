import { FormFieldNames } from '../types/formFieldNames';
import * as Yup from 'yup';

export const schema = Yup.object().shape({
	[FormFieldNames.Name]: Yup.string().required('Required').typeError('Must be a number'),
	[FormFieldNames.Height]: Yup.number().min(50).required('Required').typeError('Must be a number'),
	[FormFieldNames.Mass]: Yup.number().min(1).required('Required').typeError('Must be a number'),
	// ...
});
