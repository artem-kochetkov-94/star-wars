import * as Yup from 'yup';
import { FormFieldNames } from '../types/formFieldNames';

export const schema = Yup.object().shape({
	[FormFieldNames.Search]: Yup.string(),
	// ...
});
