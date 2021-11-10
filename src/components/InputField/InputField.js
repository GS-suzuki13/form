import {
  ErrorMessage,
  Field,
  useFormikContext,
} from 'formik';
import style from './InputField.css';


export function InputField({ id, name, label, step, placeholder, type = 'text', component = "input", dimensao = "col-12 mb-16" }) {
  const { errors, touched } = useFormikContext();

  return (
    <div className={dimensao, style.div}>
      <label className="form-label">{label}</label>
      <Field
        autoComplete='off'
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        component={component}
        step={step}
        className={
          "form-control" +
          (errors[name] && touched[name] ? " is-invalid" : "")
        }
      />
      <ErrorMessage
        name={name}
        component="div"
        className='Error'
      />
    </div>
  );
}
