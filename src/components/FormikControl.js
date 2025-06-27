import Input from "./Input";
import TextArea from "./TextArea";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <select {...rest} />;
    case "radio":
      return <radio {...rest} />;
    case "checkbox":
    case "date":
    default:
      return null;
  }
};

export default FormikControl;
