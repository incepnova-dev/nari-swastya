import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from '../../../data';

/**
 * TestimonialGrid
 * ---------------
 * Grid of testimonial cards
 */
export const TestimonialGrid: React.FC = () => {
  return (
    <div className="testimonial-grid">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
      ))}
    </div>
  );
};

