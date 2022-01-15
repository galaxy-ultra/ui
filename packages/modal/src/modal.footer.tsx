import { memo, useContext } from 'react';
import { getClass } from './helper';
import Context from './modal.context';
import { ModalFooterProps } from './modal.type';

export const ModalFooter: React.FC<ModalFooterProps> = memo((props) => {
  const { children, defaultFooter = true, separator = true, cancelTitle, confirmTitle } = props;
  const { onConfirm, onClose, showModal } = useContext(Context);

  if (!children && !defaultFooter) {
    return null;
  }

  if (defaultFooter) {
    return (
      <div>
        {separator && <hr className="opacity-90" />}
        <div className="mt-4">
          <div className="flex items-center justify-end">
            <button
              className={getClass({
                'px-4 font-medium py-2 duration-300 outline-none rounded-md bg-white hover:bg-gray-50 border border-gray-300':
                  true,
                'cursor-auto': !showModal,
              })}
              onClick={onClose}
            >
              {cancelTitle || 'Cancel'}
            </button>
            <button
              className={getClass({
                'px-4 font-medium py-2 duration-300 outline-none rounded-md bg-blue-600 hover:bg-blue-700 text-gray-50 ml-4':
                  true,
                'cursor-auto': !showModal,
              })}
              onClick={onConfirm}
            >
              {confirmTitle || 'Confirm'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {separator && <hr className="opacity-90" />}
      <div className="mt-4">{children}</div>
    </div>
  );
});
