import React from 'react';
import { Testimonial } from '../../../data';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

/**
 * TestimonialCard
 * ---------------
 * Individual testimonial card with morphing avatar
 */
export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <div className="t-card reveal" style={{ transitionDelay: testimonial.transitionDelay }}>
      <div className="t-avatar-wrap">
        <div className="t-avatar" style={{ animationDelay: testimonial.avatarAnimationDelay }}>
          {testimonial.avatar}
        </div>
      </div>
      <div className="t-stars">{testimonial.stars}</div>
      <p className="t-text">{testimonial.text}</p>
      <div className="t-name">{testimonial.name}</div>
      <div className="t-role">{testimonial.role}</div>
    </div>
  );
};

