import { BreadcrumbItemProps } from './breadcrumb.type';
import { getClass } from './helper';

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = (props) => {
  const { children, active } = props;

  return (
    <span
      className={getClass({
        'opacity-90': !active,
        'font-semibold': !!active,
      })}
    >
      {children}
    </span>
  );
};
