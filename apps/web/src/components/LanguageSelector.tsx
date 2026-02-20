import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { headerCodeToI18n, i18nToHeaderCode } from '../utils/languageMapping';

const LANGUAGE_OPTIONS = ['EN', 'HI', 'BN', 'KN', 'TA', 'TE', 'ML', 'MR', 'GU'] as const;
type LanguageCode = (typeof LANGUAGE_OPTIONS)[number];

export const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, changeLanguage } = useLanguage();
  const selected = i18nToHeaderCode(currentLanguage);

  const handleToggle = () => {
    setIsOpen((open) => !open);
  };

  const handleSelect = (code: LanguageCode) => {
    const i18nCode = headerCodeToI18n(code);
    changeLanguage(i18nCode);
    setIsOpen(false);
  };

  return (
    <div className="lang-selector">
      <button type="button" className="lang-toggle" onClick={handleToggle}>
        <span className="lang-toggle-label">{selected}</span>
        <span className="lang-toggle-chevron">{isOpen ? '˄' : '˅'}</span>
      </button>
      {isOpen && (
        <div className="lang-menu">
          {LANGUAGE_OPTIONS.map((code) => {
            const isActive = code === selected;
            return (
              <button
                key={code}
                type="button"
                className={isActive ? 'lang-menu-item lang-menu-item--active' : 'lang-menu-item'}
                onClick={() => handleSelect(code)}
              >
                <span>{code}</span>
                {isActive && <span className="lang-menu-check">✔</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};


