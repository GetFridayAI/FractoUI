import { ReactElement, ReactNode } from 'react';

export interface SimpleCardProps {
  className?: string;
  title?: string;
  hasShadow?: boolean;
  isDisabled?: boolean;
}

export interface CardProps extends SimpleCardProps {
  description?: ReactElement | ReactNode;
  cardHeader?: ReactElement | ReactNode;
}