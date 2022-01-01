type CardSize = 'small' | 'normal' | 'large' | 'full';
type CardRounded = 'sm' | 'nm' | 'md' | 'lg' | 'xl' | 'none';
type CardShadow = 'sm' | 'nm' | 'md' | 'lg' | 'xl' | 'none';

export interface CardProps {
  image?: {
    src: string;
    position?: 'top' | 'bottom';
    ratio?: 'auto' | '1/1' | '16/9';
  };
  title?: string;
  size?: CardSize;
  rounded?: CardRounded;
  shadow?: CardShadow;
  border?: boolean;
}
