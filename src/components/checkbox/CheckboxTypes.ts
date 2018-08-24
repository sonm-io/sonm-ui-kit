import * as React from 'react';

export interface ICheckboxRequired {
  onChange: (value: boolean) => void;
  title: string;
}
export interface IChekboxOptional {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  value?: boolean;
}

export type ICheckbox = ICheckboxRequired & IChekboxOptional;
