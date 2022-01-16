import { RefObject, useEffect, useRef, useState } from 'react';
import { getClass } from './helper';
import { ModalBody } from './modal.body';
import Context from './modal.context';
import './modal.css';
import { ModalFooter } from './modal.footer';
import { ModalHeader } from './modal.header';
import { ModalProps } from './modal.type';

const ModalUI: React.FC<ModalProps> = (props) => {
  const {
    show,
    onClose,
    size = 'md',
    children,
    zIndex = 1000,
    position = 'top',
    onConfirm,
    closeOutside = false,
  } = props;

  const [firstRender, setFirstRender] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(show);
  const modalRef = useRef<HTMLDivElement>(null);
  const bgModalRef = useRef<HTMLDivElement>(null);

  const useOutsideElement = (ref: RefObject<HTMLDivElement>, isFirst: boolean, closeOutside: boolean) => {
    useEffect(() => {
      const onClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target) && !isFirst && closeOutside) {
          setFirstRender(false);
          onClose();
        }
      };
      document.addEventListener('mousedown', onClickOutside);
      return () => {
        document.removeEventListener('mousedown', onClickOutside);
      };
    }, [ref, isFirst, closeOutside]);
  };

  useOutsideElement(modalRef, firstRender, closeOutside);

  useEffect(() => {
    setShowModal(show);

    if (!show) {
      document.body.style.overflowY = 'unset';
    } else if (document.body.scrollHeight > document.body.clientHeight) {
      document.body.style.overflowY = 'scroll';
    }
  }, [show]);

  useEffect(() => {
    if (showModal && firstRender) {
      setFirstRender(false);
    }
  }, [showModal, firstRender]);

  return (
    <Context.Provider
      value={{
        showModal: showModal,
        onClose: onClose,
        onConfirm: onConfirm,
      }}
    >
      <div
        style={{ zIndex: zIndex }}
        ref={bgModalRef}
        className={getClass({
          'fixed w-full min-h-screen inset-0 bg-gray-900 bg-opacity-50': true,
          'overflow-y-auto': showModal,
          'gu-modal-background-hide': !showModal && !firstRender,
          hidden: firstRender,
        })}
      >
        <div className="min-h-screen">
          <div className="fixed inset-0 overflow-y-auto">
            <div
              className={getClass({
                'flex pb-7 justify-center': true,
                'items-center h-full': position === 'center',
                'items-start pt-7': position === 'top',
              })}
            >
              <div
                style={{ zIndex: zIndex + 10 }}
                ref={modalRef}
                className={getClass({
                  'duration-300 px-5 py-4 rounded-lg shadow-xl bg-white': true,
                  'gu-modal-content-show': showModal,
                  'gu-modal-content-hide': !showModal,
                  'w-11/12 sm:w-6/12 md:w-6/12 lg:w-4/12 xl:w-4/12 2xl:w-4/12': size === 'sm',
                  'w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-5/12 2xl:w-5/12': size === 'md',
                  'w-11/12 sm:w-9/12 md:w-7/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12': size === 'lg',
                  'w-11/12 sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-10/12 2xl:w-9/12': size === 'xl',
                })}
              >
                <div>{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};

export const Modal = Object.assign(ModalUI, {
  Header: ModalHeader,
  Footer: ModalFooter,
  Body: ModalBody,
});
