import { memo, useContext } from 'react';
import { getClass, getElementType } from './helper';
import Context from './modal.context';
import { ModalHeaderProps } from './modal.type';

export const ModalHeader: React.FC<ModalHeaderProps> = memo((props) => {
  const { closeButton = true, children, separator = true } = props;
  const { onClose } = useContext(Context);

  if (!children) {
    return null;
  }

  const headerType = getElementType(children);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div
          className={getClass({
            'font-semibold': headerType === 'string',
          })}
        >
          {children}
        </div>
        {closeButton && (
          <button className="outline-none opacity-50 hover:opacity-80 duration-300" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      {separator && <hr className="opacity-90" />}
    </div>
  );
});
