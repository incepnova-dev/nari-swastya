/**
 * Header type definitions
 * Shared types for header components and data
 */

export interface DropdownItemData {
  href: string;
  icon: string;
  iconVariant: string;
  title: string;
  subtitle: string;
  titleColor?: string;
  isFeatured?: boolean;
}

export interface FlyoutItemData {
  href: string;
  icon: string;
  iconVariant: string;
  title: string;
  subtitle: string;
  flyoutItems: DropdownItemData[];
}

export type DropdownEntry =
  | { type: 'item'; data: DropdownItemData }
  | { type: 'flyout'; data: FlyoutItemData }
  | { type: 'separator' }
  | { type: 'section-label'; label: string };

export interface SimpleNavLink {
  href: string;
  label: string;
  isActive?: boolean;
}

export interface ActionButton {
  href: string;
  icon: string;
  label: string;
  variant: 'outline' | 'primary';
}
