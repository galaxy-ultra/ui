import { ReactNode } from 'react';

export function getClass(data: Record<string, boolean>) {
  return Object.entries(data)
    .map((item) => (item[1] ? item[0] : null))
    .filter((item) => item !== null)
    .join(' ');
}

export const getElementType = (element?: ReactNode) => {
  if (!element) {
    return null;
  }

  if (typeof element === 'string') {
    return 'string';
  }

  return 'JSX';
};
