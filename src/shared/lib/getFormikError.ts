import { FormikErrors, FormikTouched } from 'formik';

export const getFormikError = <T extends object>(
	field: keyof T,
	errors: FormikErrors<T>,
	touched: FormikTouched<T>,
): string | undefined => {
	if (touched[field] && errors[field]) {
		return errors[field] as string;
	}

	return undefined;
};
