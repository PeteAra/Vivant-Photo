import React from 'react';

const variantClass = {
  default: 'bubble--default',
  muted: 'bubble--muted',
  tinted: 'bubble--tinted',
  outline: 'bubble--outline',
};

export const Bubble = ({
  align = 'start',
  variant = 'muted',
  className = '',
  children,
  ...props
}) => (
  <div
    className={`bubble bubble--${align} ${variantClass[variant] || variantClass.muted} ${className}`.trim()}
    {...props}
  >
    {children}
  </div>
);

export const BubbleContent = ({ className = '', children, ...props }) => (
  <div className={`bubble-content ${className}`.trim()} {...props}>
    {children}
  </div>
);

export const BubbleGroup = ({ className = '', children, ...props }) => (
  <div className={`bubble-group ${className}`.trim()} {...props}>
    {children}
  </div>
);
