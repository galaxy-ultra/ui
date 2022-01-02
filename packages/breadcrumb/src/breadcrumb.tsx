import { Children, cloneElement, Fragment, isValidElement, ReactNode } from 'react';
import { BreadcrumbItem } from './breadcrumb-item';
import { BreadcrumbProps } from './breadcrumb.type';

const BreadcrumbUI: React.FC<BreadcrumbProps> = (props) => {
  const { children, separatorIcon } = props;

  const WapperChildren = (children: ReactNode) => {
    return Children.map(children, (child, index) => {
      if (!isValidElement(child)) {
        return null;
      }
      return (
        <Fragment>
          <li className="mr-3 flex items-center">
            {cloneElement(child)}
            <span className="ml-3">
              {index < Children.count(children) - 1 &&
                (separatorIcon || (
                  <span className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                ))}
            </span>
          </li>
        </Fragment>
      );
    });
  };

  return (
    <div>
      <ul className="flex items-center">{WapperChildren(children)}</ul>
    </div>
  );
};

export const Breadcrumb = Object.assign(BreadcrumbUI, {
  Item: BreadcrumbItem,
});
