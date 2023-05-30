import { FormFieldNames } from "./types";
import * as Yup from "yup";

export const schema = Yup.object().shape({
  [FormFieldNames.Name]: Yup.string().required("Required"),
  [FormFieldNames.Height]: Yup.number().min(50).required("Required"),
  [FormFieldNames.Mass]: Yup.number().min(1).required("Required"),
  // ...
});
