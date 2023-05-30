import { FormikErrors, FormikTouched } from "formik";

export const getFormikError = (
  field: string,
  errors: FormikErrors<any>,
  touched: FormikTouched<any>
): string | undefined => {
  if (touched[field] && errors[field]) {
    return errors[field] as string;
  }

  return undefined;
};
