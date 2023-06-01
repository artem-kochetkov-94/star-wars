import { NoErrorThrownError, getError } from 'src/shared/lib/getError';
import { FormikError } from 'src/shared/types/formikError';
import { schema } from '../model/schema';
import { FormFieldNames } from '../types/formFieldNames';

describe(`schema.${[FormFieldNames.Name]} validation`, () => {
	it(`requires should fail`, async () => {
		const error = await getError<FormikError>(async () =>
			schema.validateSyncAt(FormFieldNames.Name, {
				[FormFieldNames.Name]: '',
			}),
		);

		expect(error).not.toBeInstanceOf(NoErrorThrownError);
		expect(error.name).toBe('ValidationError');
		expect(error.type).toBe('required');
	});
});

describe(`schema.${[FormFieldNames.Height]} validation`, () => {
	it(`optionality should fail`, async () => {
		const error = await getError<FormikError>(async () =>
			schema.validateSyncAt(FormFieldNames.Height, {
				[FormFieldNames.Height]: undefined,
			}),
		);

		expect(error).not.toBeInstanceOf(NoErrorThrownError);
		expect(error.name).toBe('ValidationError');
		expect(error.type).toBe('optionality');
	});

	it(`Wrong type should fail`, async () => {
		const error = await getError<FormikError>(async () =>
			schema.validateSyncAt(FormFieldNames.Height, {
				[FormFieldNames.Height]: 'test',
			}),
		);

		expect(error).not.toBeInstanceOf(NoErrorThrownError);
		expect(error.name).toBe('ValidationError');
		expect(error.type).toBe('typeError');
	});

	it(`Wrong value should fail`, async () => {
		const error = await getError<FormikError>(async () =>
			schema.validateSyncAt(FormFieldNames.Height, {
				[FormFieldNames.Height]: 49,
			}),
		);

		expect(error).not.toBeInstanceOf(NoErrorThrownError);
		expect(error.name).toBe('ValidationError');
		expect(error.type).toBe('min');
	});

	it(`Correct value should pass`, async () => {
		const error = await getError<FormikError>(async () =>
			schema.validateSyncAt(FormFieldNames.Height, {
				[FormFieldNames.Height]: 55,
			}),
		);

		expect(error).toBeInstanceOf(NoErrorThrownError);
	});
});

describe(`schema.${[FormFieldNames.Mass]} validation`, () => {
	it(`optionality should fail`, async () => {
		const error = await getError<FormikError>(async () =>
			schema.validateSyncAt(FormFieldNames.Mass, {
				[FormFieldNames.Height]: undefined,
			}),
		);

		expect(error).not.toBeInstanceOf(NoErrorThrownError);
		expect(error.name).toBe('ValidationError');
		expect(error.type).toBe('optionality');
	});

	it(`Wrong type should fail`, async () => {
		const error = await getError<FormikError>(async () =>
			schema.validateSyncAt(FormFieldNames.Mass, {
				[FormFieldNames.Mass]: 'test',
			}),
		);

		expect(error).not.toBeInstanceOf(NoErrorThrownError);
		expect(error.name).toBe('ValidationError');
		expect(error.type).toBe('typeError');
	});

	it(`Wrong value should fail`, async () => {
		const error = await getError<FormikError>(async () =>
			schema.validateSyncAt(FormFieldNames.Mass, {
				[FormFieldNames.Mass]: 0,
			}),
		);

		expect(error).not.toBeInstanceOf(NoErrorThrownError);
		expect(error.name).toBe('ValidationError');
		expect(error.type).toBe('min');
	});

	it(`Correct value should pass`, async () => {
		const error = await getError<FormikError>(async () =>
			schema.validateSyncAt(FormFieldNames.Mass, {
				[FormFieldNames.Mass]: 55,
			}),
		);

		expect(error).toBeInstanceOf(NoErrorThrownError);
	});
});
