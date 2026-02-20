import React from 'react';
import { DropdownItem, DropdownItemData } from './DropdownItem';

export interface FlyoutItemData {
  href: string;
  icon: string;
  iconVariant: string;
  title: string;
  subtitle: string;
  flyoutItems: DropdownItemData[];
}

export interface DropdownFlyoutItemProps extends FlyoutItemData {
  className?: string;
}

export const DropdownFlyoutItem: React.FC<DropdownFlyoutItemProps> = ({
  href,
  icon,
  iconVariant,
  title,
  subtitle,
  flyoutItems,
  className = '',
}) => {
  return (
    <div className={`dd-item dd-has-flyout ${className}`.trim()}>
      <div className={`dd-icon ${iconVariant}`}>
        <i className={icon} />
      </div>
      <a
        href={href}
        style={{ textDecoration: 'none', color: 'inherit', flex: 1 }}
      >
        <strong>{title}</strong>
        <span>{subtitle}</span>
      </a>
      <i className="fa-solid fa-chevron-right dd-flyout-arrow" />
      <div className="dd-flyout">
        {flyoutItems.map((item, index) => (
          <DropdownItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DropdownFlyoutItem;
