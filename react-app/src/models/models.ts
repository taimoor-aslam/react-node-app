import { HTMLInputTypeAttribute } from "react";

export interface IStory {
  title: string;
  abstract: string;
  url: string;
  createdDate: string;
  imageUrl: string;
}

export interface ITextFieldProps {
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  setValue?: (value: string) => void;
  defaultValue?: string | number;
  additionalClasses?: string;
  fieldName?: string;
  disabled?: boolean;
  width?: number;
  name?: string;
}
