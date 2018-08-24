import * as React from 'react';

export interface IDropdownRequiredProps {
  value: any;
  isExpanded: boolean;
  onButtonClick: () => void;
  onRequireClose: () => void;
  children: React.ReactNode;
  title: string;
}
export interface IDropdownOptionalProps {
  className: string;
  disabled: boolean;
}

export type IDropdownAllProps = IDropdownRequiredProps & IDropdownOptionalProps;

export type IDropdownInputProps = IDropdownRequiredProps & Partial<IDropdownOptionalProps>;
