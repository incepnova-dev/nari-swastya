import React, { useState } from 'react';
import {
  wellnessAccordionItems,
  WellnessAccordionItem
} from '../../data';

interface WellnessAccordionProps {
  defaultOpenId?: string;
}

export const WellnessAccordion: React.FC<WellnessAccordionProps> = ({ defaultOpenId }) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="accordion">
      {wellnessAccordionItems.map((item: WellnessAccordionItem) => {
        const isActive = openId === item.id;

        return (
          <div
            key={item.id}
            className={isActive ? 'accordion-item active' : 'accordion-item'}
          >
            <button
              type="button"
              className="accordion-header"
              onClick={() => toggleItem(item.id)}
            >
              <span className="accordion-icon">{item.icon}</span>
              <span className="accordion-title">{item.title}</span>
              <span className="accordion-toggle">{isActive ? '▲' : '▼'}</span>
            </button>
            <div className="accordion-content">
              <div className="accordion-body">
                <p>{item.body}</p>
                <div className="accordion-links">
                  {item.links.map((link) => (
                    <a
                      key={link.id}
                      href="#"
                      className="accordion-link"
                    >
                      {link.iconClass && <i className={link.iconClass} />}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};


