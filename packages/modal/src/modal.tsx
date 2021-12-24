import { memo, RefObject, useEffect, useRef, useState } from 'react';
import { getClass, getElementType } from '../utils/helper';
import './modal.css';
import { ModalFooterProps, ModalHeaderProps, ModalProps } from './modal.type';

const ModalHeader: React.FC<ModalHeaderProps> = memo((props) => {
  const { header, closeButton, onClose, showHeader } = props;
  const headerType = getElementType(header);

  if (!header || !showHeader) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div
          className={getClass({
            'font-semibold': headerType === 'string',
          })}
        >
          {header}
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
      <hr className="opacity-10" />
    </div>
  );
});

const ModalFooter: React.FC<ModalFooterProps> = memo((props) => {
  const { footer, onConfirm, onClose, showFooter } = props;

  if (!showFooter) {
    return null;
  }

  if (!footer) {
    return (
      <div>
        <hr className="opacity-10" />
        <div className="mt-4">
          <div className="flex items-center justify-end">
            <button
              className="px-4 font-medium py-2 duration-300 outline-none rounded-md bg-white hover:bg-gray-50 border border-gray-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-4 font-medium py-2 duration-300 outline-none rounded-md bg-blue-600 hover:bg-blue-700 text-gray-50 ml-4"
              onClick={onConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <hr className="opacity-10" />
      <div className="mt-4">{footer}</div>
    </div>
  );
});

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    show,
    onClose,
    size = 'md',
    children,
    zIndex = 100,
    header,
    footer,
    closeButton,
    position = 'top',
    onConfirm,
    showFooter = true,
    showHeader = true,
  } = props;

  const [firstRender, setFirstRender] = useState<boolean>(true);

  const modalRef = useRef<HTMLDivElement>(null);
  const bgModalRef = useRef<HTMLDivElement>(null);

  const useOutsideElement = (ref: RefObject<HTMLDivElement>) => {
    useEffect(() => {
      const onClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target) && !firstRender) {
          setFirstRender(false);
          onClose();
        }
      };
      document.addEventListener('mousedown', onClickOutside);
      return () => {
        document.removeEventListener('mousedown', onClickOutside);
      };
    }, [ref]);
  };

  useOutsideElement(modalRef);

  useEffect(() => {
    if (show && firstRender) {
      setFirstRender(false);
    }
  }, [show, firstRender]);

  return (
    <div
      style={{ zIndex: zIndex }}
      ref={bgModalRef}
      className={getClass({
        'flex justify-center fixed w-full min-h-screen inset-0 bg-gray-900 bg-opacity-50': true,
        'overflow-hidden': show,
        'gu-modal-background-hide': !show && !firstRender,
        hidden: firstRender,
        'items-center': position === 'center',
        'items-start pt-5': position === 'top',
      })}
    >
      <div
        style={{ zIndex: zIndex + 10 }}
        ref={modalRef}
        className={getClass({
          'duration-300 px-5 py-4 rounded-lg shadow-xl bg-white': true,
          'gu-modal-content-show': show,
          'gu-modal-content-hide': !show,
          'w-4/12': size === 'sm',
          'w-5/12': size === 'md',
          'w-6/12': size === 'lg',
          'w-9/12': size === 'xl',
        })}
      >
        <ModalHeader
          onClose={() => {
            setFirstRender(false);
            onClose();
          }}
          header={header}
          closeButton={closeButton}
          showHeader={showHeader}
        />

        <div className="my-4">{children}</div>

        <ModalFooter
          footer={footer}
          onClose={() => {
            setFirstRender(false);
            onClose();
          }}
          onConfirm={() => {
            setFirstRender(false);
            onConfirm && onConfirm();
          }}
          showFooter={showFooter}
        />
      </div>
    </div>
  );
};
