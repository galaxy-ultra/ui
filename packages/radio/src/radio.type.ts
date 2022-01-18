export interface RadioProps {
  value?: any;
  checked?: boolean;
  size?: 'small' | 'normal' | 'large';
  label?: {
    content: string | JSX.Element;
    position?: 'top' | 'bottom' | 'left' | 'right';
  };
  onChange?: (checked: boolean, value?: any) => void;
  valueFromGroup?: any;
  wrapperClassName?: string;
}

export interface RadioGroupProps {
  value?: any;
  onChange?: (value: any) => void;
  type?: 'vertical' | 'horizontal';
}
