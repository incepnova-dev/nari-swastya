import React from 'react';
import { DropdownItem } from './DropdownItem';
import { FlyoutItemData } from '../../data';
import { Link } from 'react-router-dom';

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
      <Link
        to={href}
        style={{ textDecoration: 'none', color: 'inherit', flex: 1 }}
      >
        <strong>{title}</strong>
        <span>{subtitle}</span>
      </Link>
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
