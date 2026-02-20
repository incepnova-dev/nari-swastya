// Header sub-components
export { Logo } from './Logo';
export type { LogoProps } from './Logo';

export { NavLink } from './NavLink';
export type { NavLinkProps } from './NavLink';

export { DropdownItem } from './DropdownItem';
export type { DropdownItemProps } from './DropdownItem';

export { DropdownFlyoutItem } from './DropdownFlyoutItem';
export type { DropdownFlyoutItemProps } from './DropdownFlyoutItem';

export { NavDropdown } from './NavDropdown';
export type { NavDropdownProps } from './NavDropdown';

export { Hamburger } from './Hamburger';
export type { HamburgerProps } from './Hamburger';

export { ProfileButton } from './ProfileButton';
export type { ProfileMenuItem, ProfileButtonProps } from './ProfileButton';

export { NavActions } from './NavActions';
export type { NavActionsProps } from './NavActions';

export { DesktopNav } from './DesktopNav';
export type { DesktopNavProps } from './DesktopNav';

// Data re-exports (from src/data)
export {
  journeysDropdownEntries,
  servicesDropdownEntries,
  additionalInfoDropdownEntries,
  simpleNavLinks,
  rightNavLinks,
  defaultActionButtons,
} from '../../data';

export type {
  DropdownItemData,
  FlyoutItemData,
  DropdownEntry,
  SimpleNavLink,
  ActionButton,
} from '../../data';
