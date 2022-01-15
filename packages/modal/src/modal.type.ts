export type ModalSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ModalProps {
  show: boolean;
  onClose: () => void;
  size?: ModalSize;
  zIndex?: number;
  position?: 'center' | 'top';
  onConfirm?: () => void;
  closeOutside?: boolean;
}

export interface ModalHeaderProps {
  closeButton?: boolean;
  separator?: boolean;
}

export interface ModalFooterProps {
  defaultFooter?: boolean;
  cancelTitle?: string;
  confirmTitle?: string;
  separator?: boolean;
}
