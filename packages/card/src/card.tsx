import { CardProps } from './card.type';
import { getClass } from './helper';

export const Card: React.FC<CardProps> = (props) => {
  const { image, title, children, size = 'small', rounded = 'nm', shadow = 'md', border = false } = props;

  return (
    <div
      className={getClass({
        'w-full overflow-hidden bg-white': true,
        'max-w-xs': size === 'small',
        'max-w-md': size === 'normal',
        'max-w-xl': size === 'large',
        'rounded-sm': rounded === 'sm',
        rounded: rounded === 'nm',
        'rounded-md': rounded === 'md',
        'rounded-lg': rounded === 'lg',
        'rounded-xl': rounded === 'xl',
        'shadow-sm': shadow === 'sm',
        shadow: shadow === 'nm',
        'shadow-md': shadow === 'md',
        'shadow-lg': shadow === 'lg',
        'shadow-xl': shadow === 'xl',
        border: !!border,
      })}
    >
      {image && image.position !== 'bottom' && (
        <div>
          <img
            src={image.src}
            alt="card image"
            className={getClass({
              'object-cover': true,
              'aspect-auto': !image.ratio || image.ratio === 'auto',
              'aspect-square': image.ratio === '1/1',
              'aspect-video': image.ratio === '16/9',
            })}
          />
        </div>
      )}

      <div className="p-5">
        {title && <div className="font-semibold text-xl">{title}</div>}
        <div className="mt-3">{children}</div>
      </div>

      {image && image.position === 'bottom' && (
        <div>
          <img
            src={image.src}
            alt="card image"
            className={getClass({
              'object-cover': true,
              'aspect-auto': !image.ratio || image.ratio === 'auto',
              'aspect-square': image.ratio === '1/1',
              'aspect-video': image.ratio === '16/9',
            })}
          />
        </div>
      )}
    </div>
  );
};
