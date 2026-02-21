import React from 'react';
import { DropdownItemData } from '../../data';
import { Link } from 'react-router-dom';

export interface DropdownItemProps extends DropdownItemData {
  className?: string;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  href,
  icon,
  iconVariant,
  title,
  subtitle,
  titleColor,
  isFeatured = false,
  className = '',
}) => {
  const itemClass = `dd-item${isFeatured ? ' dd-item-featured' : ''} ${className}`.trim();

  return (
    <Link to={href} className={itemClass}>
      <div className={`dd-icon ${iconVariant}`}>
        <i className={icon} />
      </div>
      <div>
        <strong style={titleColor ? { color: titleColor } : undefined}>{title}</strong>
        <span>{subtitle}</span>
      </div>
    </Link>
  );
};

export default DropdownItem;
