import React, { useState, useRef, useEffect } from 'react';

export interface ProfileMenuItem {
  href: string;
  icon: string;
  label: string;
}

export interface ProfileButtonProps {
  userName?: string;
  userAvatar?: string;
  menuItems?: ProfileMenuItem[];
  className?: string;
}

const defaultMenuItems: ProfileMenuItem[] = [
  { href: '/dashboard', icon: 'fa-solid fa-gauge-high', label: 'My Dashboard' },
  { href: '/profile', icon: 'fa-solid fa-user', label: 'My Profile' },
  { href: '/settings', icon: 'fa-solid fa-gear', label: 'Settings' },
  { href: '/logout', icon: 'fa-solid fa-right-from-bracket', label: 'Sign Out' },
];

export const ProfileButton: React.FC<ProfileButtonProps> = ({
  userName,
  userAvatar,
  menuItems = defaultMenuItems,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((open) => !open);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className={`profile-button ${className}`.trim()} ref={menuRef}>
      <button
        type="button"
        className="profile-toggle"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {userAvatar ? (
          <img src={userAvatar} alt={userName || 'Profile'} className="profile-avatar" />
        ) : (
          <div className="profile-avatar-placeholder">
            <i className="fa-solid fa-user" />
          </div>
        )}
        {userName && <span className="profile-name">{userName}</span>}
        <i className={`fa-solid fa-chevron-down profile-chevron ${isOpen ? 'open' : ''}`} />
      </button>

      {isOpen && (
        <div className="profile-menu">
          {menuItems.map((item, index) => (
            <a key={index} href={item.href} className="profile-menu-item">
              <i className={item.icon} />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
