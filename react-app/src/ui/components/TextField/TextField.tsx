import { ITextFieldProps } from "../../../models/models";

export const TextField = (props: ITextFieldProps) => {
  return (
    <input
      id={props.id}
      name={props.name}
      type={props.type}
      onChange={(e) => (props.setValue ? props.setValue(e.target.value) : null)}
      className={`form-control text-field ${props.additionalClasses}`}
      placeholder={props.placeholder}
      width={props.width ?? ""}
      value={props.defaultValue}
      disabled={props.disabled}
    />
  );
};
