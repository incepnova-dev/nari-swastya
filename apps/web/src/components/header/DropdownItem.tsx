import React from 'react';

export interface DropdownItemData {
  href: string;
  icon: string;
  iconVariant: string;
  title: string;
  subtitle: string;
  titleColor?: string;
  isFeatured?: boolean;
}

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
    <a href={href} className={itemClass}>
      <div className={`dd-icon ${iconVariant}`}>
        <i className={icon} />
      </div>
      <div>
        <strong style={titleColor ? { color: titleColor } : undefined}>{title}</strong>
        <span>{subtitle}</span>
      </div>
    </a>
  );
};

export default DropdownItem;
