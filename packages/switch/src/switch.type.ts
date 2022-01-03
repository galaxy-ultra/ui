type SwitchSize = 'small' | 'normal' | 'large';

export interface SwitchProps {
  size?: SwitchSize;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  checkedColor?: string;
  unCheckedColor?: string;
  label?: {
    checked: string | JSX.Element;
    unChecked: string | JSX.Element;
    position?: 'left' | 'right' | 'top' | 'bottom';
  };
  cursor?: 'pointer' | 'auto';
}
