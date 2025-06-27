import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Select = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name} id={name} {...rest} />
      {options.map((x) => {
        return (
          <option key={x.value} value={x.value}>
            {option.key}
          </option>
        );
      })}
      <ErrorMessage name="select" component={TextError} />
    </div>
  );
};

export default Select;
