import { HTMLInputTypeAttribute, ReactElement } from "react";

export type IProps = {
  children: ReactElement;
};

export type FormField = {
  label?: {
    name: string;
    for: string;
  };

  input: {
    type: HTMLInputTypeAttribute;
    name: string;
    placeholder?: string;
    required?: boolean;
  };
};
